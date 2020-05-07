import { SkinChanger } from "./class/SkinChanger.js";

let node = document.querySelector(".skinSelector"),
    stylesheet = document.querySelector("#skinsheet"),
    skinSelector = new SkinChanger(node, "basic", stylesheet),
    xxx = new SkinChanger(node, "gold", stylesheet );

function init(){
    //
    
}

init();