function greetings(fname, today) {
    // Spot time
    var hour = today.getHours();

    // Greetings
    if (hour < 12) {
        var greeting = "Good Morning!";
    } else if (hour < 18) {
        var greeting = "Good Afternoon!";
    } else {
        var greeting = "Good Evening!";
    }
    return greeting + " " + fname + " " + "<br>Welcome to my website!";
}

function starTime() {
    var today = new Date(); // Get the current date and time
    var weekday = today.getDay(); // Get the current day of the week (0-6)
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = days[weekday]; // Get the name of the current day
    var day = today.getDate();
    var month = today.getMonth();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[month]; // Get the name of the current month 
    var year = today.getFullYear();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    document.getElementById("dateTime").innerHTML = dayName + ", " + day + " " + monthName + " " + year + " " + addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
    var t = setTimeout(starTime, 1000); // refresh time every 1 second
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function daysInMonths(DateTime) { // function to calculate the number of days in the current month
    var currentMonth = DateTime.getMonth() + 1; // get the current month (0-11, so we add 1 to get 1-12)
    var months_with_30_days = [4, 6, 9, 11]; // April, June, September, November
    var months_with_31_days = [1, 3, 5, 7, 8, 10, 12]; // January, March, May, July, August, October, December
    var february_month = 2; // February
    if (months_with_30_days.includes(currentMonth)) {
        var daysInMonth = 30;
    } else if (months_with_31_days.includes(currentMonth)) {
        var daysInMonth = 31;
    } else if (currentMonth === february_month) {
        var year = DateTime.getFullYear(); // get the current year
        // Check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            var daysInMonth = 29; // Leap year
        } else {
            var daysInMonth = 28; // Non-leap year
        }
    }
    return daysInMonth;
}