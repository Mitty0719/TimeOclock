"use strict";
(function(){
    const clockSection = document.querySelector(".clockSection");
    const clockZone = document.querySelector(".clockZone");

    const hourZone = document.querySelector(".hourZone");
    const minZone = document.querySelector(".minZone");
    const secZone = document.querySelector(".secZone");

    const separator = document.querySelector("#separator");

    const hourZoneFirstLines = document.querySelectorAll(".hourZone .firstSign div");
    const hourZoneSecondLines = document.querySelectorAll(".hourZone .secondSign div");
    const minZoneFirstLines = document.querySelectorAll(".minZone .firstSign div");
    const minZoneSecondLines = document.querySelectorAll(".minZone .secondSign div");

    const alarmWin = document.querySelector("#alarmWin");
    const btnAlarmStop = document.querySelector("#btnAlarmStop");

    let currHour;
    let currMin;
    let currSec;

    let audio;

    let signNumber = [
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

    let numberHour = [
        "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE",
        "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN",
        "TWENTY", "TWENTY-ONE", "TWENTY-TWO", "TWENTY-THREE"
    ]
    let numberMin = [
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
        currSec = time.getSeconds();

        if(hour.length == 1){
            hour = "0" + hour;
        }
        if(minute.length == 1){
            minute = "0" + minute;
        }
        if(second.length == 1){
            second = "0" + second;
        }
        
        if(true){
            let firstHour = hour.charAt(0);
            let secondHour = hour.charAt(1);
            changeSign(hourZoneFirstLines, firstHour);
            changeSign(hourZoneSecondLines, secondHour);
        }

        if(true){
            let firstMin = minute.charAt(0);
            let secondMin = minute.charAt(1);
            changeSign(minZoneFirstLines, firstMin);
            changeSign(minZoneSecondLines, secondMin);
        }
        
        secZone.innerText = second;

        if(onAlarm){
            alarmCheck();
        }
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
    let alarmButton = document.querySelector("#alarmButton");
    let alarmSection = document.querySelector(".alarmSection");

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
    let alarmHour = document.querySelector("#alarmHour");
    let alarmMin = document.querySelector("#alarmMin");
    let alramSwitch = document.querySelector("#alarmSwitch");
    let toggleSpace = document.querySelector("#toggleSpace");
    let alarmToggle = document.querySelector("#toggle");

    let alarmHourIdx = 0;
    let alarmMinIdx = 0;
    let onAlarm = false;

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

    alarmSwitch.addEventListener("click", alarmSwitchOnOff);

    function alarmSwitchOff(){
        alarmToggle.style.left = "0px";
        toggleSpace.style.backgroundColor = "#888"
        onAlarm = false;
    }
    function alarmSwitchOn(){
        alarmToggle.style.left = "30px"
        toggleSpace.style.backgroundColor = "#68C151";
        onAlarm = true;
    }

    function alarmSwitchOnOff(){
        if(onAlarm){
            alarmSwitchOff();
        }else{
            alarmSwitchOn();
        }
    }

    function alarmCheck(){
        if(alarmHourIdx == currHour && alarmMinIdx == currMin && audio == null){
            audio = new Audio("musics/wakeupsong.mp3");
            audio.loop = true;
            audio.play();

            alarmWin.style.top = "0px";
        }
        alarmWin.style.display = "block";
    }

    function alarmStop(){
        audio.pause();
        audio = null;
        alarmWin.style.top = "-150px";
        alarmSwitchOnOff();
    }

    btnAlarmStop.addEventListener("click", alarmStop);
})();