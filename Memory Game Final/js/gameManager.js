import { CardComponent } from "./cardComponent.js";
import { CardService } from "./cardService.js";

export class GameManager{
    constructor() {
        this.cardComponents = [];
        this.cardServices = new CardService(this);
        //this.cardServices.getcards();
        this.cardsContainer = document.getElementById('cardsContainer');
        this.clicksLbl = document.getElementById('clicksLBL');
        this.timerLbl = document.getElementById('timerLBL');
        this.resetBtn = document.getElementById('resetBtn');
        this.gameMessage = document.getElementById('gameCompleted');
        this.resetBtn.onclick = this.resetGame.bind(this);

        this.cardComponent1 = null;
        this.cardComponent2 = null;
        this.showingTimer = null;
        this.clickCounter = 0;
        this.time = 0;
        this.isGameCompleted = false;

        this.resetGame();
    }

    resetGame(){
        this.cardComponent1 = null;
        this.cardComponent2 = null;
        this.showingTimer = null;
        window.clearInterval(this.gameTimer);
        this.gameTimer = null;
        this.timerLbl.innerHTML = 'Timer: ' + 0;
        this.clicksLbl.innerHTML = 'Clicks: ' + 0;
        this.time = 0;
        this.clickCounter = 0;
        this.gameMessage.innerHTML = '';
        this.isGameCompleted = false;

        this.cardComponents.forEach(cardComponent => {
            cardComponent.remove();
        })

        this.cardServices.getcards();
    }

    showCards(cards){
        this.cardComponents = [];
        cards.forEach(card => {
            var cardComponent = new CardComponent(this, card, this.cardsContainer);
            this.cardComponents.push(cardComponent);
        });

        this.gameTimer = window.setInterval(this.updateTime.bind(this), 1000);
    }

    showSelectedCards(cardComponent){

        //Controla el tiempo de dar click.
        if(this.cardComponent1 !== null && this.cardComponent2 !== null){
            return;
         }

        this.clickCounter += 1;
        this.updateClicksLabel();

        if(this.cardComponent1 === null){
            this.cardComponent1 = cardComponent;
            this.cardComponent1.show();
        } else {
            this.cardComponent2 = cardComponent;
            this.cardComponent2.show();
        }

        if(this.cardComponent1 !== null && this.cardComponent2 !== null){
           this.showingTimer = window.setTimeout(this.checkCardsSelected.bind(this), 1000);
        }
    }

    checkCardsSelected(){

        window.clearTimeout(this.showingTimer);
        this.showingTimer = null;

        if(this.cardComponent1 !== null && this.cardComponent2 !== null){
            if(this.cardComponent1.card.id === this.cardComponent2.card.id){
                this.cardComponent1.discover();
                this.cardComponent2.discover();
            } else {
                this.cardComponent1.hide();
                this.cardComponent2.hide();
            }
        }
        this.cardComponent1 = null;
        this.cardComponent2 = null;

        this.isGameCompleted = this.checkGameCompleted();
        if(this.isGameCompleted){
            this.gameMessage.innerHTML = 'YOU WON!!! Congratulations!!!';
            window.clearInterval(this.gameTimer);
        }
    }

    updateClicksLabel(){
        this.clicksLbl.innerHTML = 'Clicks: ' + this.clickCounter;
    }

    updateTime(){
        this.time += 1;
        this.timerLbl.innerHTML = 'Timer: ' + this.time;
    }

    checkGameCompleted(){
        for(let i = 0; i < this.cardComponents.length; i++){
            const cardComponent = this.cardComponents[i];
            if(!cardComponent.card.isDiscovered){
                return false;
            }
        }
        return true;
    }
}