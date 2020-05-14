import { SkinChanger } from "./class/SkinChanger.js";
import { ColorManager } from "./class/ColorManager.js";
import { Manager } from "./class/Manager.js";
import { Tutorial } from "./class/Tutorial.js";

let headnode = document.querySelector(".skinSelector"),
    headnodeColor = document.querySelector(".colors"),
    targetColorGB = document.querySelector(".gamebox"),
    targetColorControls = document.querySelectorAll(".controls > div, .skin-change > div"),
    skinsheet = document.querySelector("#skinsheet"),
    inputTitle = document.querySelector("#gbTitle"),
    outputTitle = document.querySelector(".logo"),
    skins = ["basic", "gold"],
    swtch2 = document.querySelector("#radio-two"),
    swtch1 = document.querySelector("#radio-one"),
    resetBtn = document.querySelector("#resetBtn"),
    saveBtn = document.querySelector("#saveBtn");
window.skinChanger;
    


function init(){
    initSkins();
    initTitleChanger();
    initColorManager();
    initSwitch();
    initResetButton();  
    initSaveButton();
    initTutorial();
}

function initTutorial(){
    window.tutorial = new Tutorial();
}

function initColorManager(){
    window.colorManager =  new ColorManager(headnodeColor, targetColorGB);
}

function initSkins(){
    window.skinChanger = new SkinChanger(headnode, skins, skinsheet);
}

function initSwitch(){
    swtch1.addEventListener("click", function(){
        window.colorManager.targetNode = targetColorGB;
    });
    swtch2.addEventListener("click", function(){
        window.colorManager.targetNode = targetColorControls;
    });
}

function initTitleChanger(){
    inputTitle.value = "";
    inputTitle.addEventListener("input", setTitle);
}

function initResetButton(){
    resetBtn.addEventListener("click", Manager.clearAllChanges);
}



function initSaveButton(){
    saveBtn.addEventListener("click", function(){
        skinChanger.deleteButtons();
        //console.log(skins);
        Manager.saveAllChanges(skins);
        initSkins();
    } );

}

function setTitle(event) {
    outputTitle.textContent = event.target.value;
    if(outputTitle.textContent == "") {
        outputTitle.textContent = "GameBox";
    }
}

init();