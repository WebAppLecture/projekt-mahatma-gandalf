export class Manager{

    //clearAllChanges resets all Changes
    static clearAllChanges(){
        document.querySelector(".gamebox").style.background = "";
        document.querySelectorAll(".controls > div, .skin-change > div").forEach(node => { node.style.background = "";});
    }

    static saveAllChanges(){
        let gamebox = document.querySelector(".gamebox"),
            style = getComputedStyle(gamebox, null),
            test = style.backgroundImage;
        console.log("test" , test);

    }

    //computes the respective complementary of current colors
    static computeComplementaryColor(hue, saturation, lightness, alpha){
        let hueValue= hue * 1,
            complementaryColor = hueValue + 180,
            complementaryColorResult = complementaryColor > 360 ? complementaryColor -=360 : complementaryColor,
            complementaryColorString = `hsl(${complementaryColorResult}, ${saturation}%, ${lightness}%, ${alpha})`;
        return complementaryColorString;

    }


    // this static method  compute shadow gradiations of the current color and returns the colors in the resultString Array
    static computeShadowOfCurrentColor(hue, saturation, lightness, alpha){
        let saturationValue = saturation * 1,
            lightnessValue = lightness *1,
            saturationBright  = saturationValue < 85 ? saturationValue += 14 : saturationValue,
            lightnessBright = lightnessValue < 85 ? lightnessValue += 14 : lightnessValue = 90,
            resultStringBright = `hsl(${hue}, ${saturationBright}%, ${lightnessBright}%, ${alpha})`,
            saturationDark = saturationValue > 15 ? saturationValue -=14 : saturationValue = 1,
            lightnessDark = lightnessValue > 20 ? lightnessValue -=19 : lightnessValue = 1,
            resultStringDark = `hsl(${hue}, ${saturationDark}%, ${lightnessDark}%, ${alpha})`,
            resultString = [];
        resultString.push(resultStringBright);
        resultString.push(resultStringDark);
        //console.log(resultString);

        return resultString;
    
    }

    static CONFIG = {
        test: "Hallo"
    }


}