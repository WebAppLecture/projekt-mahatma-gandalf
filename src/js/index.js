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

//Initialisiert das Tutorial. (noch nicht fertig deshalb noch display: none)
function initTutorial(){
    window.tutorial = new Tutorial();
}

//Initialisiert den Colormanager
function initColorManager(){
    window.colorManager =  new ColorManager(headnodeColor, targetColorGB);
}

//Initialisiert den SKinChanegr
function initSkins(){
    window.skinChanger = new SkinChanger(headnode, skins, skinsheet);
}

//Initialisiert den Switch bei dem man zwischen der Bearbeitung der Gamebox oder der COntrols hin und her wechseln kann
function initSwitch(){
    swtch1.addEventListener("click", function(){
        window.colorManager.targetNode = targetColorGB;
    });
    swtch2.addEventListener("click", function(){
        window.colorManager.targetNode = targetColorControls;
    });
}


//Initialisiert den reset Button 
function initResetButton(){
    resetBtn.addEventListener("click", Manager.clearAllChanges);
}


//Initialisiert den Save Button
function initSaveButton(){
    saveBtn.addEventListener("click", function(){
        skinChanger.deleteButtons();
        //console.log(skins);
        Manager.saveAllChanges(skins);
        initSkins();
    } );

}

//Funktion zum setzten des Eventlisteners auf den TitelInput
function initTitleChanger(){
    inputTitle.value = "";
    inputTitle.addEventListener("input", setTitle);
}

//CallbackFunktion zur Änderung des Gamebox namens
function setTitle(event) {
    outputTitle.textContent = event.target.value;
    if(outputTitle.textContent == "") {
        outputTitle.textContent = "GameBox";
    }
}

init();