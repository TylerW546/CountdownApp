targetDateList = [month, day, year, hour, min, sec, ampm]
targetDate = targetDateList[0] + " " + targetDateList[1] + ", " + targetDateList[2] + " " + targetDateList[3] + ":" + targetDateList[4] + ":" + targetDateList[5] + " " + targetDateList[6];
function setup() {
    var month = "February";
    var day = "1";
    var year = "2022";
    var hour = "2";
    var min = "00";
    var sec = "00";
    var ampm = "pm";
    
    var dayDiv = document.createElement("div");
    dayDiv.id = "days"
    document.getElementById("demo").appendChild(dayDiv)

    var hourDiv = document.createElement("div");
    hourDiv.id = "hours"
    document.getElementById("demo").appendChild(hourDiv)

    var minuteDiv = document.createElement("div");
    minuteDiv.id = "minutes"
    document.getElementById("demo").appendChild(minuteDiv)

    var secondDiv = document.createElement("div");
    secondDiv.id = "seconds"
    document.getElementById("demo").appendChild(secondDiv)

    // Update the count down every 1 second
    var x = setInterval(function() {
        document.getElementById("title").innerHTML = "Countdown to...<br/>" + global.targetDate;
        // Set the date we're counting down to
        var countDownDate = new Date(global.targetDate).getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (document.getElementById("days").innerHTML != days + " Days") {
            document.getElementById("days").innerHTML = days + " Days";
        }
        if (document.getElementById("hours").innerHTML != hours + " Hours") {
            document.getElementById("hours").innerHTML = hours + " Hours";
        }
        if (document.getElementById("minutes").innerHTML != minutes + " Minutes") {
            document.getElementById("minutes").innerHTML = minutes + " Minutes";
        }

        document.getElementById("seconds").innerHTML = seconds + " Seconds";
        
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

setup()