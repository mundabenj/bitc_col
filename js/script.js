function greetings(fname) {
    // Spot time
    var today = new Date();
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
    document.getElementById("dateTime").innerHTML = dayName + ", " + day + " " + monthName + " " + year + " " + hour + ":" + min + ":" + sec;
    var t = setTimeout(starTime, 1000); // refresh time every 1 second
}