import { SkinChanger } from "./class/SkinChanger.js";
import { ColorManager } from "./class/ColorManager.js";
import { Manager } from "./class/Manager.js";

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
    


function init(){
    initSkins();
    initTitleChanger();
    initColorManager();
    initSwitch();
    initResetButton();  
    initSaveButton();
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
    saveBtn.addEventListener("click", Manager.saveAllChanges);

}

function setTitle(event) {
    outputTitle.textContent = event.target.value;
    if(outputTitle.textContent == "") {
        outputTitle.textContent = "GameBox";
    }
}
init();