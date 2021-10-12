let hourZone = document.getElementsByClassName("hourZone");
let minZone = document.getElementsByClassName("minZone");

let line1;
let line2;
let line3;
let line4;
let line5;
let line6;
let line7;

function firstSignSelect(){
    line1 = document.querySelector(".firstSign .line1");
    line2 = document.querySelector(".firstSign .line2");
    line3 = document.querySelector(".firstSign .line3");
    line4 = document.querySelector(".firstSign .line4");
    line5 = document.querySelector(".firstSign .line5");
    line6 = document.querySelector(".firstSign .line6");
    line7 = document.querySelector(".firstSign .line7");
}
function secondSignSelect(){
    line1 = document.querySelector(".secondSign .line1");
    line2 = document.querySelector(".secondSign .line2");
    line3 = document.querySelector(".secondSign .line3");
    line4 = document.querySelector(".secondSign .line4");
    line5 = document.querySelector(".secondSign .line5");
    line6 = document.querySelector(".secondSign .line6");
    line7 = document.querySelector(".secondSign .line7");
}

function one(zone, index){
    
    if(index == 1){
        firstSignSelect();
    }else{
        secondSignSelect();
    }
    line1.style.backgroundColor = "#333";
    line2.style.backgroundColor = "#fff";
    line3.style.backgroundColor = "#fff";
    line4.style.backgroundColor = "#333";
    line5.style.backgroundColor = "#333";
    line6.style.backgroundColor = "#333";
    line7.style.backgroundColor = "#333";
}

