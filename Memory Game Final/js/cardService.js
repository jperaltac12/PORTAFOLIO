import { Card } from "./card.js";

export class CardService{
    constructor(gameManager){
        this.gameManager = gameManager;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/cards/6';
    }

    getcards() {
        var request = new XMLHttpRequest();
        request.onload = this.getcardsCompleted.bind(this);
        request.open('GET', this.url);
        request.send();
    }

    getcardsCompleted(event){
        var request = event.target;
        var jasonData = request.response;
        var data = JSON.parse(jasonData);
        var cards = [];

        data.cards.forEach(function (cardData) {
           var card = new Card(cardData.id, cardData.icon, cardData.isDiscovered);
           cards.push(card);
        });

        this.gameManager.showCards(cards);
    }
}