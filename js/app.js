// SELECTING THE DOM

const loader = document.getElementById("loader");
const mainBody = document.querySelector(".main-body");
const textArea = document.querySelector(".text-area");
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const animImg = document.querySelector(".anim-img");
const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");

const initialMainText = "Lauren 'Rennie' Hentz";
const initialSubText = "Will You Be My Valentine?";

const initialBtn0Text = "YES, I WILL !!!";
const initialBtn1Text = "NO!";

// ON LOAD ANIMATION

window.addEventListener("load", () => {
    // mainBody.style.visibility = "hidden";

    loader.style.height = "100%";
    loader.style.width = "100%";
    loader.style.borderRadius = "50%";
    setTimeout(() => {
        loader.style.visibility = "hidden";
        mainBody.style.visibility = "visible";
    }, 6500);
});

// CLick EVENTS

btn0.addEventListener("click", () => {
    // btn0.classList.add("hide");
    // mainBody.style.visibility = "hidden";
    animImg.src = "./img/yes.gif";
    animImg.style.width = "300px";
    mainText.classList.add("yes-page");
    mainText.style.fontFamily = "Open Sans";
    mainText.style.marginTop = "50%";
    mainText.style.textAlign = "left";
    mainText.textContent =
        "I love you very much and hope you have an amazing Valentine's Day. Although an e-card is not chocolate or flowers, I hope you can forgive me. ";

    subText.classList.add("yes-page");
    subText.textContent = "Thank you for saying yes again :) Love u lots";
    subText.style.textAlign = "left";
    btn0.textContent = "Say Yes Again 😍";
    btn1.classList.add("hide");

    btn0.addEventListener("click", () => {
        animImg.src = "./img/main-header.gif";
        mainText.classList.remove("yes-page");
        mainText.textContent = initialMainText;
        mainText.style.fontFamily = "Pacifico";
        mainText.style.textAlign = "center";
        subText.textContent = initialSubText;
        subText.classList.remove("yes-page");
        subText.style.textAlign = "center";
        btn0.textContent = initialBtn0Text;
        btn1.classList.remove("hide");
    });
});

btn1.addEventListener("click", () => {
    animImg.src = "./img/witty rose.gif";
    animImg.style.marginTop = "20%";
    animImg.style.width = "300px";
    animImg.style.height = "300px";
    mainText.classList.add("yes-page");
    mainText.style.fontFamily = "Open Sans";
    mainText.style.textAlign = "left";
    mainText.textContent = "You make me very sad.....";

    subText.classList.add("yes-page");
    subText.textContent = "Now Go Back And Hit YES";
    subText.style.textAlign = "left";
    btn1.textContent = "Take Me Back 😢";
    btn0.classList.add("hide");

    btn1.addEventListener("click", () => {
        animImg.src = "./img/main-header.gif";
        mainText.classList.remove("yes-page");
        mainText.textContent = initialMainText;
        mainText.style.fontFamily = "Pacifico";
        mainText.style.textAlign = "center";
        subText.textContent = initialSubText;
        subText.classList.remove("yes-page");
        subText.style.textAlign = "center";
        btn0.classList.remove("hide");
        btn0.textContent = initialBtn0Text;
        btn1.classList.remove("hide");
        btn1.textContent = initialBtn1Text;
    });
});
