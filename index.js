//   qistion 1

const currentDateElement = document.getElementById("currentDate");
const currentDate = new Date();
currentDateElement.innerHTML = currentDate.toDateString();


//   qistion 2


function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const ageInYears = new Date().getFullYear() - birthdate.getFullYear();
    document.getElementById("age").innerHTML = "Your age is approximately " + ageInYears + " years.";
}

// quistion 3

function calculateDayOfWeek() {
    const inputDate = new Date(document.getElementById("inputDate").value);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    document.getElementById("dayOfWeek").innerHTML = "The day of the week for that date is " + dayOfWeek + ".";
}
//  quistion 4

function checkCountdown() {
    let date1 = document.getElementById('date1');
    let date2 = document.getElementById('date2');
    let now = new Date(date1.value);
    let eventDate = new Date(date2.value);
    let difference = eventDate.getTime() - now.getTime();
    let difToDay = Math.round(difference / (1000 * 60 * 60 * 24));
    let countdown = document.getElementById('countdown');
    countdown.innerText = difToDay;
}


// quistion 5

function calculateDaysBetween() {
    const startDateInput = document.getElementById("startDateInput").value;
    const endDateInput = document.getElementById("endDateInput").value;

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert("Please enter valid dates.");
        return;
    }

    const timeDifference = endDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerHTML = 'The number of days between ' + startDateInput + ' and ' + endDateInput + ' is ' + daysDifference + ' days.';
}

// quistion 6

