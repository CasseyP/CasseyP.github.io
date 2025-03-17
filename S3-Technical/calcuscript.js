let prev, pres;
let allOutput = [];

function addToScreen(btn) {
    let display = document.getElementById("result");
    pres = btn;
    if (display.innerHTML == "Error") {
        res.innerHTML = "";
    }
    allOutput.push(btn);
    display.innerHTML += btn;
    console.log(allOutput)
}

function computeResult() {
    let res = document.getElementById("result");
    if (res.innerHTML == false) {
        return;
    }
    try {
        res.innerHTML = eval(res.innerHTML);
        console.log(res.innerHTML);
    }
    catch (error) {
        res.innerHTML = "Error";
    }

}

function clearResult() {
    let display = document.getElementById("result");
    display.innerHTML = "";
}


function backResult() {
    let res = document.getElementById("result");
    str = res.innerHTML;
    console.log(str);
    allOutput = res.innerHTML.split("");

    if (str == "Error") {
        res.innerHTML = "";
    } else {
        allOutput.pop();
        console.log(allOutput);
        res.innerHTML = allOutput.join("");
    }
}


function selectedBtn(btn) {
    let presbtn = document.getElementById(btn);

    if (prev) {
        prev.style.border = "4px solid transparent";
    }

    presbtn.style.border = "4px solid #8F7079";

    presbtn.classList.add("bouncing");
    setTimeout(() => {
        presbtn.classList.remove("bouncing");
    }, 200);

    prev = presbtn;
}
