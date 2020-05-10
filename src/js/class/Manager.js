export class Manager{
    static clearAllChanges(){
        document.querySelector(".gamebox").style.background = "";
        document.querySelectorAll(".controls > div, .skin-change > div").forEach(node => { node.style.background = "";});
    }

    static getCurrentGameboxColor(){
        //

    }

    static computeShadowOfCurrentColor(hue, saturation, lightness, alpha){
        let saturationValue = saturation * 1,
            lightnessValue = lightness *1,
            hueValue = hue*1,
            saturationDark  = saturationValue < 90 ? saturationValue += 20 : saturationValue -= 20,
            lightnessDark = lightnessValue < 90 ? lightnessValue += 20 : lightnessValue -=20,
            xx = hueValue + 50,
            resultString = `hsl(${xx}, ${saturationDark}%, ${lightnessDark}%, ${alpha})`;

        return resultString;
    
    }

    static CONFIG = {
        test: "Hallo"
    }


}