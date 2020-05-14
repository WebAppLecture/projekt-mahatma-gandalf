export class Manager{

    

    //clearAllChanges resets all Changes
    static clearAllChanges(){
        document.querySelector(".gamebox").style.background = "";
        document.querySelectorAll(".controls > div, .skin-change > div").forEach(node => { node.style.background = "";});
        let style = document.querySelector("style");
        if(style){
            style.remove();
        }
    }

    static saveAllChanges(skins){
        let name = Manager.getValidName(skins);
        if(name){
            skins.push(name);
            let savedObj = Manager.getAllChanges();
            console.log("ready to save Object", savedObj, "to localeStroage with key:", name);
            localStorage.setItem(name, JSON.stringify(savedObj));
    
        }

    }

    static getAllChanges(){
        let gamebox = Manager.CONFIG.gameboxNode,
        gameBoxstyle = getComputedStyle(gamebox, null),
        gameboxValue = gameBoxstyle.backgroundImage !== "none" ? gameBoxstyle.backgroundImage : gameBoxstyle.backgroundColor,
        gameboxProperty = gameBoxstyle.backgroundImage !== "none" ? "background-image:" : "background-color:",
        gameboxSelektor = ".gamebox",
        gameboxCss = `${gameboxSelektor} { ${gameboxProperty} ${gameboxValue};}`,
        controls = Manager.CONFIG.controlNodes[0],
        controlsStyle = getComputedStyle(controls, null),
        controlsValue = controlsStyle.backgroundImage !== "none"? controlsStyle.backgroundImage : controlsStyle.backgroundColor,
        controlsProperty = controlsStyle.backgroundImage !== "none"? "background-image:" : "background-color:",
        controlsSelektor = ".controls > div, .skin-change > div",
        controlsCss = `${controlsSelektor} { ${controlsProperty} ${controlsValue};}`,
        saveSkin = {Gamebox: gameboxCss,
                         Controls: controlsCss};
        return saveSkin;

    }

    static setSavedSkinValues(skin){
        Manager.clearStyleElement();
        let head = document.querySelector("head"),
        style = document.createElement("style");
        head.appendChild(style);
        style.type = "text/css";
        let skinObj = JSON.parse(localStorage.getItem(skin));
        const cssValue = Object.values(skinObj);
        var resultCss = "";
        for(const value of cssValue){
            resultCss += value;
        }
        console.log(resultCss);
        style.innerHTML = resultCss;
    }

    static clearStyleElement(){
        let style = document.querySelector("style");
        if(style){
            style.remove();
        }
    }



    static getValidName(skins){
        let name = document.querySelector(".logo").innerHTML,
            nameLC = name.toLocaleLowerCase();
        nameLC = nameLC.charAt() !== "x"? "x" + nameLC: nameLC;
        console.log(nameLC);
        if(skins.includes(nameLC) ){
            alert("Please provide a unique Name");
    
        } else return nameLC;
    }

    //computes the respective complementary of current colors
    static computeComplementaryColor(hue, saturation, lightness, alpha){
        let hueValue= hue * 1,
            complementaryColor = hueValue + 180,
            complementaryColorResult = complementaryColor > 360 ? complementaryColor -=360 : complementaryColor,
            complementaryColorString = `hsl(${complementaryColorResult}, 100%, 50%, ${alpha})`;
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
        gameboxNode: document.querySelector(".gamebox"),
        controlNodes: document.querySelectorAll(".controls > div, .skin-change > div"),
        currentGBName: document.querySelector(".logo").innerHTML
    }


}