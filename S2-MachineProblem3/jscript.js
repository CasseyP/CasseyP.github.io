let prevBox = null;
let isActive = false;

function displayBox(dayb) {
    if (isActive) return;
    isActive = true;

    const buttonColor = getComputedStyle(document.querySelector(`.${dayb}`)).backgroundColor;
    const buttonImage = getComputedStyle(document.querySelector(`.${dayb}`)).backgroundImage;


    if (prevBox) {
        prevBox.style.backgroundColor = prevBox.style.borderColor;
        prevBox.style.top = "-700px";
        prevBox.style.borderWidth = "10px";
        prevBox.style.transition = "top 1.3s ease-out, background-color 1.3s ease-out, border-width 1.3s ease-out";

        setTimeout(() => {
            isActive = false;
        }, 1000);
    } else {
        isActive = false;
    }

    const newBox = document.createElement("div");

    newBox.style.position = "absolute";
    newBox.style.width = "300px";
    newBox.style.height = "300px";
    newBox.style.left = "50%";
    newBox.style.top = "-300px";
    newBox.style.transform = "translateY(-10%)";
    newBox.style.backgroundColor = buttonColor;
    newBox.style.border = `10px solid ${buttonColor}`;
    newBox.style.borderRadius = "15px";
    newBox.style.transition = "top 1.3s ease-out, background-color 1.3s ease-out, border-width 1.3s ease-out";

    document.body.appendChild(newBox);

    setTimeout(() => {
        newBox.style.top = "35%";
        newBox.style.backgroundImage = buttonImage;
        newBox.style.backgroundSize = "280px"
        newBox.style.backgroundRepeat = "no-repeat"
    }, 100);

    setTimeout(() => {
        newBox.style.backgroundColor = "transparent";
        newBox.style.borderWidth = "10px";
    }, 500);

    prevBox = newBox;
}
