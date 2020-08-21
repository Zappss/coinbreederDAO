

// Countdown
var endDate = "2020/8/25";

var stakeBalanceCountdownElement = document.querySelector(".custom_countdown_text");

var stakeBalanceCountdown = new ysCountDown(endDate, function (remaining, finished) {
    var message = "";

    if (finished) {
      message = "Expired";
    } else {
      message = remaining.totalDays + "d ";
      message += remaining.hours + "hrs ";
      message += remaining.minutes + "min ";
      // message += remaining.seconds + "sec ";
    }

    stakeBalanceCountdownElement.textContent = message;
});

// Token
var tokenAmt  = document.querySelector("#token_amount");
var tokenSwap = document.querySelector("#token_swap");

var swapToken = () => {
  console.log(tokenAmt.value);
  tokenSwap.value = tokenAmt.value;
}

tokenAmt.addEventListener("keyup", swapToken);


			
      