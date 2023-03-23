const days = document.getElementById("day");
const hours = document.getElementById("hour");
const minits = document.getElementById("minute");
const seconds = document.getElementById("second");
const years = document.getElementById("newYear");

const enddate = new Date(new Date().getFullYear() + 1, 0, 1, 00, 00);
const endtime = enddate.getTime();

function countdown() {
  let currentDate = new Date();
  let currentime = currentDate.getTime();
  let remainingtime = endtime - currentime;

  let oneminit = 60 * 1000;
  let onehr = 60 * oneminit;
  let oneDay = 24 * onehr;

  let daysleft = Math.floor(remainingtime / oneDay);
  let hrsleft = Math.floor((remainingtime % oneDay) / onehr);
  let minsleft = Math.floor((remainingtime % onehr) / oneminit);
  let secsleft = Math.floor((remainingtime % oneminit) / 1000);
  
  let newYear = new Date().getFullYear() + 1

  days.innerHTML = daysleft;
  hours.innerHTML = hrsleft;
  minits.innerHTML = minsleft;
  seconds.innerHTML = secsleft;
  years.innerHTML = newYear;

}
setInterval(countdown, 1000);

console.log(enddate);
