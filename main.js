"use strict";

var clockSection = document.querySelector(".clockSection");
var clockZone = document.querySelector(".clockZone");

var hourZone = document.getElementsByClassName("hourZone")[0];
var minZone = document.getElementsByClassName("minZone")[0];
var secZone = document.getElementsByClassName("secZone")[0];

var separator = document.getElementById("separator");

var hourZoneFirstLines = document.querySelectorAll(".hourZone .firstSign div");
var hourZoneSecondLines = document.querySelectorAll(".hourZone .secondSign div");
var minZoneFirstLines = document.querySelectorAll(".minZone .firstSign div");
var minZoneSecondLines = document.querySelectorAll(".minZone .secondSign div");

var currHour;
var currMin;

var signNumber = [
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#222"],    // 0
    ["#222", "#fff", "#fff", "#222", "#222", "#222", "#222"],    // 1
    ["#fff", "#fff", "#222", "#fff", "#fff", "#222", "#fff"],    // 2
    ["#fff", "#fff", "#fff", "#fff", "#222", "#222", "#fff"],    // 3
    ["#222", "#fff", "#fff", "#222", "#222", "#fff", "#fff"],    // 4
    ["#fff", "#222", "#fff", "#fff", "#222", "#fff", "#fff"],    // 5
    ["#fff", "#222", "#fff", "#fff", "#fff", "#fff", "#fff"],    // 6
    ["#fff", "#fff", "#fff", "#222", "#222", "#222", "#222"],    // 7
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],    // 8
    ["#fff", "#fff", "#fff", "#fff", "#222", "#fff", "#fff"]     // 9 
]

var numberHour = [
    "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE",
    "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN",
    "TWENTY", "TWENTY-ONE", "TWENTY-TWO", "TWENTY-THREE"
]
var numberMin = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine",
    "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine",
    "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine",
    "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine",
]

function changeSign(zone, number){
    zone[0].style.backgroundColor = signNumber[number][0];
    zone[1].style.backgroundColor = signNumber[number][1];
    zone[2].style.backgroundColor = signNumber[number][2];
    zone[3].style.backgroundColor = signNumber[number][3];
    zone[4].style.backgroundColor = signNumber[number][4];
    zone[5].style.backgroundColor = signNumber[number][5];
    zone[6].style.backgroundColor = signNumber[number][6];
}

function timeCheck(){
    let time = new Date();
    let hour = String(time.getHours());
    let minute = String(time.getMinutes());
    let second = String(time.getSeconds());

    currHour = time.getHours();
    currMin = time.getMinutes();

    if(hour.length == 1){
        hour = "0" + hour;
    }
    if(minute.length == 1){
        minute = "0" + minute;
    }
    if(second.length == 1){
        second = "0" + second;
    }
    
    if(currHour != hour){
        let firstHour = hour.charAt(0);
        let secondHour = hour.charAt(1);
        changeSign(hourZoneFirstLines, firstHour);
        changeSign(hourZoneSecondLines, secondHour);
    }

    if(currMin != minute){
        let firstMin = minute.charAt(0);
        let secondMin = minute.charAt(1);
        changeSign(minZoneFirstLines, firstMin);
        changeSign(minZoneSecondLines, secondMin);
    }
    
    secZone.innerText = second;

    alarmCheck();
}
function setSeparator(){
    separator.style.visibility = separator.style.visibility == "hidden" ? "visible" : "hidden";
}


function setClock(){
    setInterval(timeCheck, 1000);
    setInterval(setSeparator, 500);
}

setClock();

/* DOM Event */
var alarmButton = document.querySelector("#alarmButton");
var alarmSection = document.querySelector(".alarmSection");

alarmButton.addEventListener("click", moveAlarmSection);

function moveAlarmSection(){
    if (alarmSection.style.left != "0px"){
        alarmSection.style.left = "0px";
        clockZone.style.left = "100px";
    }else{
        alarmSection.style.left = "-200px";
        clockZone.style.left = "0px";
    }

}

/* alarm Event */
var alarmHour = document.querySelector("#alarmHour");
var alarmMin = document.querySelector("#alarmMin");
var alramSwitch = document.querySelector("#alarmSwitch");
var toggleSpace = document.querySelector("#toggleSpace");
var alarmToggle = document.querySelector("#toggle");

var alarmHourIdx = 0;
var alarmMinIdx = 0;
var onAlarm = false;

alarmHour.addEventListener("click", changeAlarmHour); //Add scroll Event
alarmMin.addEventListener("click", changeAlramMin);

function changeAlarmHour(){
    alarmHourIdx = alarmHourIdx == 23 ? 0 : alarmHourIdx;
    alarmHour.innerText = numberHour[++alarmHourIdx];
}
function changeAlramMin(){
    alarmMinIdx = alarmMinIdx == 59 ? 0 : alarmMinIdx;
    alarmMin.innerText = numberMin[++alarmMinIdx];
}

alarmSwitch.addEventListener("click", alarmOnOff);

function alarmOnOff(){
    if(onAlarm){
        alarmToggle.style.left = "0px";
        toggleSpace.style.backgroundColor = "#888"
        onAlarm = false;
    }else{
        alarmToggle.style.left = "30px"
        toggleSpace.style.backgroundColor = "#68C151";
        onAlarm = true;
    }
}

function alarmCheck(){
    if(alarmHourIdx == currHour && alarmMinIdx == currMin){
        debugger;
    }
}