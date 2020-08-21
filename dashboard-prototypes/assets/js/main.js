

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