export class SkinChanger {

    constructor(headNode, skin, skinsheet) {
        this.headNode = headNode;
        this.skin = skin;
        this.skinsheet = skinsheet
        this.createButton();
    }

 

    createButton(){
        let btn = document.createElement("BUTTON");
        btn.innerHTML = this.skin;
        btn.addEventListener("click", this.clickedButton.bind(this));
        this.headNode.appendChild(btn);
    }

    clickedButton() {
        this.skinsheet.setAttribute("href", "./src/css/skins/" + this.skin + "/" + this.skin + ".css")
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