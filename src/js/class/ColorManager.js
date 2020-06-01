/* export class ColorsManager:
 - implements the slider for hue, saturation, lightness, alpha
 - adds eventListeners to each slider
 - handles inputs and computes the hsla output String
 - sets the backgroundcolor of each targetNode via hsla String 
 - zeigen, dass ich Englisch kann ... oder auch nicht
 */

import { Manager } from "./Manager.js";

export class ColorManager{

    constructor(headnode,targetNode){
        this.headnode = headnode;
        this.targetNode = targetNode;
        this.saturation = 100;
        this.lightness = 50;
        this.alpha = 1;
        this.hue = 50;
        this.hslaString = ""
        this.initSlider();
        this.initGradientBtns();
        }


    
    // initialisert alle Slider
    initSlider(){
        this.createHueSlider();
        this.createSaturationSlider();
        this.createLightnessSlider();
        this.createAlphaSlider();
    }

    //initialisert die GradientBtns
    initGradientBtns(){
        this.createLinearGradientBtn();
        this.createRadialGradientBtn();


    }
    
    // generates Hue Slider by creating a new DOM element. Sets Atrributes and Adds an EventsListener
    createHueSlider(){
        let slider = document.createElement("INPUT");
        slider.classList.add("slider");
        slider.setAttribute("type", "range");
        slider.setAttribute("title", "Hue");
        slider.setAttribute("id", "hueSlider");
        slider.setAttribute("min", "0");
        slider.setAttribute("max", "360");
        slider.setAttribute("step", "1");
        this.headnode.appendChild(slider);
        slider.addEventListener("input",this.sliderEventHandler.bind(this))
    }

    // generates Saturation Slider by creating a new DOM element. Sets Atrributes and Adds an EventsListener
    createSaturationSlider(){
        let slider = document.createElement("INPUT");
        slider.classList.add("slider");
        slider.setAttribute("type", "range");
        slider.setAttribute("title", "Saturation");
        slider.setAttribute("id", "saturationSlider");
        slider.setAttribute("min", "0");
        slider.setAttribute("max", "100");
        slider.setAttribute("step", "10");
        this.headnode.appendChild(slider);
        slider.addEventListener("input",this.sliderEventHandler.bind(this))
    }

    // generates Lightness Slider by creating a new DOM element. Sets Atrributes and Adds an EventsListener
    createLightnessSlider(){
        let slider = document.createElement("INPUT");
        slider.classList.add("slider");
        slider.setAttribute("type", "range");
        slider.setAttribute("title", "Lightness");
        slider.setAttribute("id", "lightnessSlider");
        slider.setAttribute("min", "0");
        slider.setAttribute("max", "100");
        slider.setAttribute("step", "10");
        this.headnode.appendChild(slider);
        slider.addEventListener("input",this.sliderEventHandler.bind(this))
    }

    // generates Alpha Slider by creating a new DOM element. Sets Atrributes and Adds an EventsListener + callback
    createAlphaSlider(){
        let slider = document.createElement("INPUT");
        slider.classList.add("slider");
        slider.setAttribute("type", "range");
        slider.setAttribute("title", "alpha");
        slider.setAttribute("id", "alphaSlider");
        slider.setAttribute("min", "0");
        slider.setAttribute("max", "1");
        slider.setAttribute("step", "0.1");
        this.headnode.appendChild(slider);
        slider.addEventListener("input",this.sliderEventHandler.bind(this))
    }

    //erstellt den LinearGradientButton
    createLinearGradientBtn(){
        let btn = document.createElement("BUTTON");
        btn.classList.add("gradients");
        btn.setAttribute("id", "linearGradientBtn");
        btn.setAttribute("title", "Set Linear Gradient");
        btn.innerHTML = "--------";
        this.headnode.appendChild(btn);
        btn.addEventListener("click", this.gradientEventHandler.bind(this));
    }

    //Erstellt den RadialGradientBtn
    createRadialGradientBtn(){
        let btn = document.createElement("BUTTON");
        btn.classList.add("gradients");
        btn.setAttribute("id", "radialGradientBtn");
        btn.setAttribute("title", "Set Radial Gradient");
        btn.innerHTML = "o";
        this.headnode.appendChild(btn);
        btn.addEventListener("click", this.gradientEventHandler.bind(this));
    }

    /*Erstellt die Callbacks für die Gradients.
    - Für den Lineargradient werden vom Manager Schatten Abstufungen der aktuellen Farbe errechnet,
    und als Array zurückgegeben. 
    - Für den  Radialgradient wird die komplementärfarbe errechnet und verwendet
    - der resultgradientstring wird je nach eingabe der Btns generiert und gesetzt.
    */
    gradientEventHandler(event){
        let gradientResultString = "",
            computedColor = Manager.computeShadowOfCurrentColor(this.hue, this.saturation, this.lightness, this.alpha),
            complementaryColor = Manager.computeComplementaryColor(this.hue, this.lightness, this.saturation, this.alpha);
            //console.log(complementaryColor);
        switch(event.target.id){
            case "linearGradientBtn":
                //console.log(event.target.id);
                gradientResultString = `linear-gradient(to right, ${this.hslaString} 25%,${computedColor[0]} 60%,${computedColor[1]} 85%, ${computedColor[1]} 98%, ${this.hslaString} 100%)`
                break;
            case "radialGradientBtn":
                //console.log(event.target.id);
                gradientResultString = `radial-gradient(ellipse at center, ${this.hslaString} 50%, ${complementaryColor} 100%)`;
                break;
            default:
                break;
        }

        //überprüft ob sich mehrer ZielKnoten befinden und setzte alle style gleich dem generierten Resultgradient String
        if(this.targetNode.length){
            this.targetNode.forEach(element => { element.style.backgroundImage = gradientResultString;                
        });} else {this.targetNode.style.backgroundImage = gradientResultString;
        }
    }

    


    /*sliderEventHandler switches between the slider ids and sets the slider input values to the templated hsla String  */
    sliderEventHandler(event){
        switch(event.target.id){
            case "hueSlider":
                //console.log("hueSlider");
                this.hue = event.target.value;
                break;
            case "saturationSlider":
                //console.log("saturationSlider");
                this.saturation = event.target.value;
                break;
            case "lightnessSlider":
                //console.log("lightnessSlider");
                this.lightness = event.target.value;
                break;
            case "alphaSlider":
                //console.log("alphaSlider");
                this.alpha = event.target.value;
                break;      
            default:
                 break;
        }
        //this.hslaString = "";
        this.hslaString = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;

        /* checks if the targetNode consist of a List of Nodes (e.g "".controls") -> if so it loops trough all elements
         and sets the color to the computed hsla String. */
        if(this.targetNode.length){
            this.targetNode.forEach(element => { element.style.background = this.hslaString;                
            });
        } else {this.targetNode.style.background = this.hslaString;}

    }


}
