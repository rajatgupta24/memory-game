const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipcard(){
    if (lockboard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard){
        //first card clicked
        hasFlippedCard = true;
        firstCard = this;
    
        return;
    }
    //second card clicked
    secondCard = this;

    checkmatch();
}

function checkmatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
    isMatch ? disablecards() : unFlipCard();
}

function disablecards(){
    firstCard.removeEventListener("click", flipcard);
    secondCard.removeEventListener("click", flipcard);

    resetBoard();
}

function unFlipCard(){
    lockboard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

    resetBoard();
    }, 400);
}

function resetBoard(){
    [hasFlippedCard, lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

cards.forEach(card => card.addEventListener("click", flipcard));