function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesCurrent = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesCurrent.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrent.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyCurrent = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneyCurrent.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyCurrent.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
