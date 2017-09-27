import Reflux from 'reflux';
import Actions from '../Actions';

const BasketStore =  Reflux.createStore({

    basket: [],

    constructor() {
        this.basket = [];
        this.listenTo(Actions.addToBasket, this.addToBasket);
        this.listenTo(Actions.removeFromBasket, this.removeFromBasket);
        this.listenTo(Actions.clearBasket, this.clearBasket);
    },

    getBasket() {
        return this.basket;
    },

    getBasketSum() {
        return this.basket.reduce((sum, article) => sum + article.price, 0);
    },

    addToBasket(article) {
        if (this.findBasketPosition(article) < 0) {
            this.basket = this.basket.concat([article])
        }
        this.trigger(this.basket());
    },

    removeFromBasket(article) {
        if (this.findBasketPosition(article) >= 0) {
            this.basket = this.basket.filter(element => element.articleId !== article.articleId)
        }
        this.trigger(this.basket());
    },

    clearBasket() {
        this.basket=  [];
        this.trigger(this.basket());
    },

    findBasketPosition(article) {
        for (i = 0; i < this.basket.length; i++) {
            if (this.basket[i].articleId === article.articleId) {
                return i;
            }
        }
        return -1;
    }
});

export default BasketStore;