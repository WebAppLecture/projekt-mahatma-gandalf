import { Manager } from "./Manager.js";

// class SkinChanger zur dynamischen erstellung der Skinbuttons

export class SkinChanger {

    constructor(headNode, skins, skinsheet) {
        this.headNode = headNode;
        this.skins = skins;
        this.skinsheet = skinsheet
        this.initskins();
    }

    //erstellt für jeden skin im skins array einen clickable Button
    initskins(){
        this.skins.forEach(skin => { this.createButton(skin)   
        });;
    }
    
    /*
    erstellt ein button und fügt ein EventListener hinzu. Je nach Art des skins (vorgefertigt/neu erstellt),
     wird eine unterschiedliche callback funktion definiert. Neue skins kriegen als erste char ein x als identifier und werden so
     identifiziert.
     */
    createButton(skin){
        let btn = document.createElement("BUTTON");
        btn.setAttribute("id", skin);
        btn.innerHTML = skin;
        btn.classList.add("selectSkin");
        this.headNode.appendChild(btn);
        btn.addEventListener("click", function(){
            Manager.clearAllChanges();
            if(skin.charAt() !== "x"){
                skinsheet.setAttribute("href", "./src/css/skins/" + skin + "/" + skin + ".css");
            } else {
                console.log("new skin added!");
                Manager.setSavedSkinValues(skin);

            };
        }); 
    }

    //löscht alle erstellte skinButtons
    deleteButtons(){
        this.skins.forEach(skin => document.querySelector("#" + skin).remove());
    }
}