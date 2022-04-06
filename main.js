ioS=false;
kbS=false;
function get(elm) {
    return document.getElementsByClassName(elm)[0];
}
get("result").style.backgroundColor = "#505050";
get("calc__kb-state").style.backgroundColor = "#909090";
function io() {
    ioS=!ioS;
    if(!ioS) {
        clean();
        kbS=false;
        get("calc__kb-state").style.backgroundColor = "#909090";
        get("calc__io-state").style.backgroundColor = "#909090";
        get("result").style.backgroundColor = "#505050";
    } else {
        get("result").style.backgroundColor = "#c0c0c0";
        get("calc__io-state").style.backgroundColor = "#00ff00";
        get("calc__kb-state").style.backgroundColor = "#ff0000";
    }
}
function kb() {
    if(ioS) {
        kbS=!kbS;
        if(!kbS) {
            get("calc__kb-state").style.backgroundColor = "#ff0000";
        } else {
            get("calc__kb-state").style.backgroundColor = "#00ff00";
        }
    }
}
function insert(dig) {
    if(ioS) {
        const currentRes = get("result");
        if(currentRes.innerHTML.length>17 == false) {
            currentRes.innerHTML = currentRes.innerHTML + dig;
        }
    }
}
function clean() {
    const calcDisplay = get("result");
    calcDisplay.innerHTML = "";
}
function back() {
    if(ioS) {
        const currentRes = get("result");
        currentRes.innerHTML = currentRes.innerHTML.substring(0, currentRes.innerHTML.length - 1);
    }
}
function calc() {
    if(ioS) {
        const calcDisplay = get("result");
        let error=false;
        let result;
        try {
            result = eval(calcDisplay.innerHTML);
        }
        catch {
            error=true;
            window.alert("There was an error in the calculation. don't put an operator behind the other example: (2++2).");
        }
        if(!error) {
            if(result != undefined) {
                if(result.length>17==false) {
                    calcDisplay.innerHTML = result;
                } else {
                    calcDisplay.innerHTML = "very large";
                }
            }
        }
    }
}
document.body.onkeypress = ()=>{
    if(ioS) {
        if(kbS) {
            let keyP = String.fromCharCode(event.keyCode);
            if(event.keyCode == 13) {
                calc();
            }
            else if(keyP == "c") {
                clean();
            }
            else if(keyP == "b") {
                back();
            }
            if(verfStdinUser(keyP)) {
                if(keyP == ",") {
                    insert(".");
                } else {
                    insert(keyP);
                }
            }
        }
    }
};
function verfStdinUser(keyS) {
    if(ioS) {
        const cp = "1234567890/*-+.,";
        let error=false;
        for(let i=0;i<15;i++) {
            if(i==14) {
                if(keyS!=cp[i]) {
                    error=true;
                    break;
                } else {
                    error=false;
                    break;
                }
            } else {
                if(keyS!=cp[i]) {
                    continue;
                } else {
                    break;
                }
            }
        }
        return !error;
    }
    return "CALC OFF";
}