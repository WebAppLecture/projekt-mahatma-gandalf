/* export class ColorsManager:
 - implements the slider for hue, saturation, lightness, alpha
 - adds eventListeners to each slider
 - handles inputs and computes the hsla output String
 - sets the backgroundcolor of each targetNode via hsla String */

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
        this.createGradientBtns();
        }


    
    // inits all Slider 
    initSlider(){
        this.createHueSlider();
        this.createSaturationSlider();
        this.createLightnessSlider();
        this.createAlphaSlider();
    }
    
    // generates Hue Slider by creating a new DOM element. Sets Atrributes and Adds an EventsListener
    createHueSlider(){
        let slider = document.createElement("INPUT");
        slider.setAttribute("type", "range");
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
        slider.setAttribute("type", "range");
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
        slider.setAttribute("type", "range");
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
        slider.setAttribute("type", "range");
        slider.setAttribute("id", "alphaSlider");
        slider.setAttribute("min", "0");
        slider.setAttribute("max", "1");
        slider.setAttribute("step", "0.1");
        this.headnode.appendChild(slider);
        slider.addEventListener("input",this.sliderEventHandler.bind(this))
    }

    createGradientBtns(){
        let btn = document.createElement("BUTTON");
        btn.setAttribute("id", "testId");
        btn.innerHTML = "linear gradient";
        this.headnode.appendChild(btn);
        btn.addEventListener("click", this.gradientEventHandler.bind(this));
    }

    gradientEventHandler(event){
        let computedColor = Manager.computeShadowOfCurrentColor(this.hue, this.saturation, this.lightness, this.alpha);
        if(this.targetNode.length){
            this.targetNode.forEach(element => { element.style.background = `radial-gradient(ellipse at center, ${this.hslaString} 50%, ${computedColor} 100%)`;                
        });} else {this.targetNode.style.background = `radial-gradient(ellipse at center, ${this.hslaString} 50%, ${computedColor} 100%)`;
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
        this.hslaString = "";
        this.hslaString = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;

        /* checks if the targetNode consist of a List of Nodes (e.g "".controls") -> if so it loops trough all elements
         and sets the color to the computed hsla String. */
        if(this.targetNode.length){
            this.targetNode.forEach(element => { element.style.background = this.hslaString;                
            });
        } else {this.targetNode.style.background = this.hslaString;}

    }


}
