let cards = document.querySelectorAll(".card");

for (let i = 0;i < cards.length;i++)
    cards[i].addEventListener("click", function turncard(cards){
        let num = Math.floor((Math.random() * 5) + 1);
        console.log(num);
        cards[i].textcontent = num;
    });

// function turncard(){
//     let num = Math.floor((Math.random() * 5) + 1);
//     console.log(num);
//     this.textcontent = num;
// }