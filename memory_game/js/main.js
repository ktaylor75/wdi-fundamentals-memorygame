var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay[0] === cardsInPlay[2]) { 
		alert("You found a match!"); 
	} else {
		alert("Sorry,try again"); 
		}
}

flipCard(0);
flipCard(2);

//User flipped cardOne;
//User flipped cardTwo;





	 


