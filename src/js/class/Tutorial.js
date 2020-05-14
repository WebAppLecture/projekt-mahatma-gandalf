export class Tutorial{

    constructor(){
        this.headNode = document.querySelector(".tutorial"),
        this.tutorialNode = document.querySelector(".cnt"),
        this.closeBtn = document.querySelector(".close"),
        this.nextBtn = document.querySelector(".nxt"),
        this.prvBtn = document.querySelector(".pre"),
        this.content = this.setContent();
        console.log
        this.currentItem = 0;  
        this.initEvents();    
    }

    initEvents(){
        this.nextBtn.addEventListener("click", this.nextItem.bind(this));
        this.prvBtn.addEventListener("click", this.prvItem.bind(this));
        this.closeBtn.addEventListener("click",this.closeItem.bind(this));

    }

    nextItem(){
        if(this.currentItem < this.content.length -1){
            this.currentItem++;
        }
        this.tutorialNode.innerHTML = this.content[this.currentItem];
        
    }

    prvItem(){
        if(this.currentItem > 0){
            this.currentItem--;  
        }
        this.tutorialNode.innerHTML = this.content[this.currentItem];
        
    }

    closeItem(){
        this.headNode.style.display = "none";
    }

    setContent(){
        let seite1 = "Willkommen zum <b> SkinMaker </> 300",
            seite2 = "Seite 2",
            seite3 = "Seite 3";
        content = [seite1, seite2, seite3];
        this.tutorialNode.innerHTML = content[0];
        return content;
    }



}