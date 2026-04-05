// Selector de elementos
const cards = document.querySelectorAll(".card");
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Animación inicial de cartas en cascada
cards.forEach((card, index) => {
    setTimeout(() => card.classList.add("visible"), index * 100);
});

// Función para voltear carta
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

// Comprobar si coinciden
function checkForMatch() {
    const isMatch = firstCard.dataset.card === secondCard.dataset.card;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

// Desactivar cartas si coinciden
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

// Voltear cartas si no coinciden
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

// Reset de variables
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Event listener para todas las cartas
cards.forEach(card => card.addEventListener("click", flipCard));

// Animaciones del header y contenedor
window.addEventListener("load", () => {
    const header = document.querySelector("header");
    const container = document.querySelector(".game-container");
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
});