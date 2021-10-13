let hourZone = document.getElementsByClassName("hourZone");
let minZone = document.getElementsByClassName("minZone");

let line1;
let line2;
let line3;
let line4;
let line5;
let line6;
let line7;
 
let numbering = [
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

function firstSignSelect(zone){
    line1 = zone.querySelector(".firstSign .line1");
    line2 = zone.querySelector(".firstSign .line2");
    line3 = zone.querySelector(".firstSign .line3");
    line4 = zone.querySelector(".firstSign .line4");
    line5 = zone.querySelector(".firstSign .line5");
    line6 = zone.querySelector(".firstSign .line6");
    line7 = zone.querySelector(".firstSign .line7");
}
function secondSignSelect(zone){
    line1 = zone.querySelector(".secondSign .line1");
    line2 = zone.querySelector(".secondSign .line2");
    line3 = zone.querySelector(".secondSign .line3");
    line4 = zone.querySelector(".secondSign .line4");
    line5 = zone.querySelector(".secondSign .line5");
    line6 = zone.querySelector(".secondSign .line6");
    line7 = zone.querySelector(".secondSign .line7");
}

function changeSign(zone, index){
    
    if(index == 1){
        firstSignSelect(zone);
    }else{
        secondSignSelect(zone);
    }
    line1.style.backgroundColor = numbering[index][0];
    line2.style.backgroundColor = numbering[index][1];
    line3.style.backgroundColor = numbering[index][2];
    line4.style.backgroundColor = numbering[index][3];
    line5.style.backgroundColor = numbering[index][4];
    line6.style.backgroundColor = numbering[index][5];
    line7.style.backgroundColor = numbering[index][6];
}

