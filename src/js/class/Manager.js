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
            Manager.getAllChanges();         
        }

        //localStorage.setItem(name, JSON.stringify("saveObject"));
    }

    static getAllChanges(){
        let gamebox = Manager.CONFIG.gameboxNode,
        gameBoxstyle = getComputedStyle(gamebox, null),
        gameboxValue = gameBoxstyle.backgroundImage !== "none" ? gameBoxstyle.backgroundImage : gameBoxstyle.backgroundColor,
        gameboxProperty = gameBoxstyle.backgroundImage !== "none" ? "background-image:" : "background-color:",
        gameboxSelektor = ".gamebox",
        gameboxCss = `${gameboxSelektor} { ${gameboxProperty} ${gameboxValue};}`;
        window.saveSkin = {Gamebox: gameboxCss};
        console.log(saveSkin.Gamebox);
        //let test = localStorage.getItem(localStorage.key(0));
        //console.log(test);
    }

    static setSavedSkinValues(){
        let head = document.querySelector("head"),
        style = document.createElement("style");
        head.appendChild(style);
        style.type = "text/css";
        style.innerHTML = saveSkin.Gamebox;

    }



    static getValidName(skins){
        let name = document.querySelector(".logo").innerHTML,
            nameLC = name.toLocaleLowerCase();
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