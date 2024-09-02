function updateTime() {
  let capeTown = document.querySelector("#cape-town");
  if (capeTown) {
    let capeTownDate = capeTown.querySelector(".date");
    let capeTownTime = capeTown.querySelector(".time");
    let capeTownCurrent = moment().tz("Africa/Johannesburg");

    capeTownDate.innerHTML = capeTownCurrent.format("MMMM Do YYYY");
    capeTownTime.innerHTML = capeTownCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDate = sydney.querySelector(".date");
    let sydneyTime = sydney.querySelector(".time");
    let sydneyCurrent = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = sydneyCurrent.format("MMMM Do YYYY");
    sydneyTime.innerHTML = sydneyCurrent.format("h:mm:ss [<small>]A[</small>]");
  }

  let continental = document.querySelector("#continental");
  if (continental) {
    let continentalDate = continental.querySelector(".date");
    let continentalTime = continental.querySelector(".time");
    let continentalCurrent = moment().tz("Chile/Continental");

    continentalDate.innerHTML = continentalCurrent.format("MMMM Do YYYY");
    continentalTime.innerHTML = continentalCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let saskatchewan = document.querySelector("#saskatchewan");
  if (saskatchewan) {
    let saskatchewanDate = saskatchewan.querySelector(".date");
    let saskatchewanTime = saskatchewan.querySelector(".time");
    let saskatchewanCurrent = moment().tz("Canada/Saskatchewan");

    saskatchewanDate.innerHTML = saskatchewanCurrent.format("MMMM Do YYYY");
    saskatchewanTime.innerHTML = saskatchewanCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")} </small></div>
        </div> <a href="index.html"> All Cities </a>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
