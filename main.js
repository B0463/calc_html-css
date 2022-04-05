function get(elm) {
    return document.getElementsByClassName(elm)[0];
}
function insert(dig) {
    const currentRes = get("result");
    if(currentRes.innerHTML.length>17 == false) {
        currentRes.innerHTML = currentRes.innerHTML + dig;
    }
}
function clean() {
    const calcDisplay = get("result");
    calcDisplay.innerHTML = "";
}
function back() {
    const currentRes = get("result");
    currentRes.innerHTML = currentRes.innerHTML.substring(0, currentRes.innerHTML.length - 1);
}
function calc() {
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