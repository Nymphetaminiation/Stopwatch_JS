var monitorMinutes = document.getElementById("monitor-minutes");
var monitorSeconds = document.getElementById("monitor-seconds");
var monitorTens = document.getElementById("monitor-tens");
var startButton = document.getElementById("start-btn");
var stopButton = document.getElementById("stop-btn");
var resetButton = document.getElementById("reset-btn");


var Interval;   // To keep track of the clicking operation

var tens_val = 0;
var seconds_val = 0;
var minutes_val = 0;


function startButtonAction()
{
    // TENS MONITOR
    // if millisecond value is less than 10 keep the 0 in front of the tens monitor
    // if its between 9 & 99 update as it is
    // if its more than 99 move on to update the seconds monitor
    tens_val++;
    if(tens_val <= 9)
    {
        monitorTens.innerHTML = "0" + tens_val;
    }
    else if(tens_val > 9 && tens_val <= 99)
    {
        monitorTens.innerHTML = tens_val;
    }
    else 
    {
        // SECONDS MONITOR
        // Same logic as tens monitor, except if its more than 60
        // then move on to update the minutes monitor
        seconds_val++;
        if(seconds_val <= 9)
        {
            monitorSeconds.innerHTML = "0" + seconds_val;
        }
        else if(seconds_val > 9 && seconds_val < 60)
        {
            monitorSeconds.innerHTML = seconds_val;
        }
        else
        {
            // MINUTES MONITOR
            // Same logic as last 2 monitors
            minutes_val++;
            if(minutes_val <= 9)
            {
                monitorMinutes.innerHTML = "0" + minutes_val;
            }
            else 
            {
                monitorMinutes.innerHTML = minutes_val;
            }
            // After 1 minute update, "second" is reset to 0
            seconds_val = 0;
            monitorSeconds.innerHTML = "00";
        }
        // After 1 second update, "tens" is reset to 0
        tens_val = 0;
        monitorTens.innerHTML = "00";
    }

}

// reset button functionality
resetButton.onclick = function resetMonitor(event) {
    console.log("Reset button pressed");
    clearInterval(Interval);
    //  Stop the event and reset the monitors
    monitorMinutes.innerHTML = "00";
    monitorSeconds.innerHTML = "00";
    monitorTens.innerHTML = "00";
}

// start button functionality
startButton.onclick = function startMonitor(event) {
    console.log("Start button pressed");
    clearInterval(Interval);
    // After every 10 millisecond run this function to update the monitors
    Interval = setInterval(startButtonAction, 10);
}

// stop button functionality
stopButton.onclick = function stopMonitor(event) {
    console.log("Stop button pressed");
    clearInterval(Interval);
}
