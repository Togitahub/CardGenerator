const indexes = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const symbols = ["♦", "♠", "♥", "♣"];
let timer;

// window.onload = randomCard;

//*---------------------------- FUNCIONES AUXILIARES ----------------------------*//

function getElement(element) {
    return document.getElementById(element);
}

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


//*---------------------------- GENERACION DE LA CARTA ALEATORIA ----------------------------*//

function randomCard() {
    let randomIndex = randomElement(indexes);
    let randomSymbol = randomElement(symbols);

    getElement("card-number").innerHTML = randomIndex;
    getElement("top-symbol").innerHTML = randomSymbol;
    getElement("bottom-symbol").innerHTML = randomSymbol;

    let isHeartOrDiamond = randomSymbol === "♥" || randomSymbol === "♦";
    getElement("top-symbol").classList.toggle("card-red-symbol", isHeartOrDiamond);
    getElement("bottom-symbol").classList.toggle("card-red-symbol", isHeartOrDiamond);

    cardAnimation();
}

//*---------------------------- FUNCIONES DE TEMPORIZADOR ----------------------------*//

function setTimer() {
    timer = setInterval(randomCard, 3000);
}

function stopTimer() {
    clearInterval(timer);
}


//*---------------------------- FUNCIONES DE ANIMACION ----------------------------*//
function cardAnimation() {
    let card = document.querySelector(".card");
    let cardAnimate = card.animate(
        [{transform: 'rotateY(0deg)'},{transform: 'rotateY(360deg)'}],
        {duration: 1200, iterations: 1}
    );
    cardAnimate.play();
}

function continueGame() {
    let description = document.querySelector(".description-container");
    let cardGame = document.querySelector(".card-container");

    description.classList.add("hide");
    cardGame.classList.remove("hide");
}