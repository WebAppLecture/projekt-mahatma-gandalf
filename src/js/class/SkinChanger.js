export class SkinChanger {

    constructor(headNode, skins, skinsheet) {
        this.headNode = headNode;
        this.skins = skins;
        this.skinsheet = skinsheet
        this.initskins();
    }

    initskins(){
        this.skins.forEach(skin => { this.createButton(skin)
            
        });;
    }
    
    createButton(skin){
        let btn = document.createElement("BUTTON");
        btn.innerHTML = skin;
        this.headNode.appendChild(btn);
        btn.addEventListener("click", function(){
            skinsheet.setAttribute("href", "./src/css/skins/" + skin + "/" + skin + ".css");
            let x = window.getComputedStyle(document.querySelector("body")).getPropertyValue("background");
            console.log(x);
        });
        
    }

    /*
    set activeSkin(name) {
        if(this.skins.includes(name)) {
            this._activeSkin = name;
            this.target.setAttribute("href", this.path + name + "/" + name + ".css");
        }
    }

    get activeSkin() {
        return this._activeSkin;
    }

    next() {
        let index = this.skins.indexOf(this._activeSkin) + 1;
        index = index >= this.skins.length ? 0 : index;
        this.activeSkin = this.skins[index];
    }

    previous() {
        let index = this.skins.indexOf(this._activeSkin) - 1;
        index = index < 0 ? this.skins.length - 1 : index;
        this.activeSkin = this.skins[index];
    }
    */

}