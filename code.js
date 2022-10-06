const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const answer = document.getElementById("answer");
const findOut = document.getElementById("findout");

findOut.addEventListener("click", findDay);

function findDay() {
  let day = number.value;
  let theMonth = month.value;
  let theYear = year.value;
  const d = new Date(`${day} ${theMonth} ${theYear}`);
  let date = d.toString();
  answer.innerText = date.slice(0, 3);
  if (number.value === "") {
    alert("Please Enter a Date");
    answer.innerText = "";
  }
}
