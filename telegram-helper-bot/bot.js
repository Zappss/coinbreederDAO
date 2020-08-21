var sqlite3 = require("sqlite3").verbose();
var { Telegraf } = require("telegraf");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

var db = new sqlite3.Database("questionsnew.db");

var bot = new Telegraf("");
var admins = ["coinbreeder"];

const welcomeMessage = "Click the FAQ Button to get the list of questions";
const questionsMessage = "Select one question below:";

////////////////////////////Keyboards////////////////////////////////////
const mainKeyboard = Markup.keyboard(["FAQ"]).resize().extra();
const backToQuestionsKeys = [
  [Markup.callbackButton("Cancel", "cancel")],
  [Markup.callbackButton("Back", "back")],
];

/////////////////////////////functions/////////////////////////////////
function getQuestionsAdmin(ctx) {
  db.all("SELECT rowid,question, answer FROM questionsnew", (err, rows) => {
    if (err) {
      throw err;
    }
    let questionsKeyList = [];
    rows.forEach((row) => {
      questionsKeyList.push([
        Markup.callbackButton(row.rowid + ". " + row.question, row.answer),
      ]);
    });
    ctx.reply(
      questionsMessage,
      Extra.markup(Markup.inlineKeyboard(questionsKeyList))
    );
  });
}
function getQuestions(ctx) {
  db.all("SELECT question, answer FROM questionsnew", (err, rows) => {
    if (err) {
      throw err;
    }
    let questionsKeyList = [];
    rows.forEach((row) => {
      questionsKeyList.push([Markup.callbackButton(row.question, row.answer)]);
    });
    ctx.reply(
      questionsMessage,
      Extra.markup(Markup.inlineKeyboard(questionsKeyList))
    );
  });
}
/*
db.serialize(function () {
  db.run(
    "CREATE TABLE questionsnew (rowid INTEGER PRIMARY KEY AUTOINCREMENT,question TEXT UNIQUE, answer TEXT)",
    function (err) {
      console.log(err);
    }
  );
});
*/
function deleteQuestion(ctx, id) {
  db.run(`DELETE FROM questionsnew WHERE rowid=${id}`, function (err) {
    if (err) {
      return console.error(err.message);
    }
    ctx.reply(`Deleted ${id} question successfully`);
  });
}

bot.start(function (ctx) {
  ctx.reply(welcomeMessage, mainKeyboard);
});

bot.on("text", function (ctx) {
  if (admins.includes(ctx.from.username)) {
    if (ctx.message.text.includes("add")) {
      var question = ctx.message.text.split("?")[0].split(" ")[1];
      var answer = ctx.message.text.split("?")[1];
      var stmt = db.prepare(
        `INSERT INTO questionsnew (question,answer) VALUES ('${question}','${answer}')`
      );
      stmt.run(function (err) {
        if (!err)
          ctx.reply(
            `Question added!\nQusetion : ${question}\nAnswer: ${answer}`
          );
        else console.log(err);
      });
      stmt.finalize();
    } else if (ctx.message.text.includes("delete")) {
      id = ctx.message.text.split(" ")[1];
      id = parseInt(id, 10);
      console.log(id);
      deleteQuestion(ctx, id);
    } else if (ctx.message.text == "FAQ") {
      getQuestionsAdmin(ctx);
    }
  } else {
    if (ctx.message.text == "FAQ") {
      getQuestions(ctx);
    }
  }
});

bot.on("callback_query", function (ctx) {
  if (!["cancel", "back"].includes(ctx.callbackQuery.data)) {
    ctx.editMessageText(
      `${ctx.callbackQuery.data}`,
      Extra.markup(Markup.inlineKeyboard(backToQuestionsKeys))
    );
  } else if (ctx.callbackQuery.data == "cancel") {
    ctx.deleteMessage();
  } else if (ctx.callbackQuery.data == "back") {
    ctx.deleteMessage();
    getQuestions(ctx);
  }
});

bot.launch();
