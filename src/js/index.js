import { SkinChanger } from "./class/SkinChanger.js";

let node = document.querySelector(".skinSelector"),
    skinsheet = document.querySelector("#skinsheet"),
    inputTitle = document.querySelector("#gbTitle"),
    outputTitle = document.querySelector(".logo"),
    skins = ["basic", "gold", "test", "test"],
    body = document.querySelector(".previous");


function init(){
    initSkins();
    initTitleChanger();
    
}



function initSkins(){
    window.skinChanger = new SkinChanger(node, skins, skinsheet);
}

function initTitleChanger(){
    inputTitle.value = "";
    inputTitle.addEventListener("input", setTitle);
}

function setTitle(event) {
    outputTitle.textContent = event.target.value;
    if(outputTitle.textContent == "") {
        outputTitle.textContent = "GameBox";
    }
}
init();