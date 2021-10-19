"use strict";

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

var numbering = [
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


function changeSign(zone, number){
    zone[0].style.backgroundColor = numbering[number][0];
    zone[1].style.backgroundColor = numbering[number][1];
    zone[2].style.backgroundColor = numbering[number][2];
    zone[3].style.backgroundColor = numbering[number][3];
    zone[4].style.backgroundColor = numbering[number][4];
    zone[5].style.backgroundColor = numbering[number][5];
    zone[6].style.backgroundColor = numbering[number][6];
}

function timeCheck(){
    let time = new Date();
    let hour = String(time.getHours());
    let minute = String(time.getMinutes());
    let second = String(time.getSeconds());

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
}
function setSeparator(){
    separator.style.visibility = separator.style.visibility == "hidden" ? "visible" : "hidden";
}


function setClock(){
    setInterval(timeCheck, 1000);
    setInterval(setSeparator, 500);
}

setClock();

/* DOM 이벤트 */
var alarmButton = document.querySelector("#alarmButton");
var alarmSection = document.querySelector(".alarmSection");

alarmButton.addEventListener("click", moveAlarmSection);


function moveAlarmSection(){
    alarmSection.style.left = "0px";

}
