export class CardComponent{
    constructor(gameManager, card, parent){
        this.parent = parent;
        this.gameManager = gameManager;
        this.card = card;
        this.container = document.createElement('div');
        this.parent.appendChild(this.container);
        this.container.className = 'cardComponent';
        this.container.classList.add('cardComponent_hidden');
        this.container.onclick = this.onCardClick.bind(this);
    }

    onCardClick(){
        this.gameManager.showSelectedCards(this);
    }

    hide(){
        this.container.classList.add('cardComponent_hidden');
        this.container.classList.remove('cardComponent_showing');
        this.container.innerHTML = '';
    }

    show(){
        this.container.classList.remove('cardComponent_hidden');
        this.container.classList.add('cardComponent_showing');
        this.container.innerHTML = this.card.icon;
    }

    discover(){
        this.card.isDiscovered = true;
        this.container.classList.remove('cardComponent_showing');
        this.container.classList.add('cardComponent_discovered');
    }

    remove(){
        this.parent.removeChild(this.container);
    }
}