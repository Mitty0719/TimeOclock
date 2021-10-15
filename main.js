var hourZone = document.getElementsByClassName("hourZone");
var minZone = document.getElementsByClassName("minZone");

var hourZoneFirstLines = document.querySelectorAll(".hourZone .firstSign div");
var hourZoneSecondLines = document.querySelectorAll(".hourZone .secondSign div");
var minZoneFirstLines = document.querySelectorAll(".minZone .firstSign div");
var minZoneSecondLines = documnet.querySelectorAll(".minZone .secondSign div");

var numbering = [
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#333"],    // 0
    ["#333", "#fff", "#fff", "#333", "#333", "#333", "#333"],    // 1
    ["#fff", "#fff", "#333", "#fff", "#fff", "#333", "#fff"],    // 2
    ["#fff", "#fff", "#fff", "#fff", "#333", "#333", "#fff"],    // 3
    ["#333", "#fff", "#fff", "#333", "#333", "#fff", "#fff"],    // 4
    ["#fff", "#333", "#fff", "#fff", "#333", "#fff", "#fff"],    // 5
    ["#fff", "#333", "#fff", "#fff", "#fff", "#fff", "#fff"],    // 6
    ["#fff", "#fff", "#fff", "#333", "#333", "#333", "#333"],    // 7
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],    // 8
    ["#fff", "#fff", "#fff", "#fff", "#333", "#fff", "#fff"]     // 9 
]


function changeSign(index){
    debugger;
    //line부분 배열 사용해서 수정하기
    line1.style.backgroundColor = numbering[index][0];
    line2.style.backgroundColor = numbering[index][1];
    line3.style.backgroundColor = numbering[index][2];
    line4.style.backgroundColor = numbering[index][3];
    line5.style.backgroundColor = numbering[index][4];
    line6.style.backgroundColor = numbering[index][5];
    line7.style.backgroundColor = numbering[index][6];
}

function timeCheck(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();

    //시간에 따라 first, second 구분주고 나눠 지정하기
    secondSignSelect(minZone);
    changeSign(3);
}

function setClock(){

    setInterval(timeCheck, 1000);
}

setClock();