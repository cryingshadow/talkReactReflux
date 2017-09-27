import Reflux from 'reflux';
import Actions from '../Actions';
import _ from 'lodash';

class BasketStore extends Reflux.Store {

    constructor() {
        super();
        this.state = {
            basket: [],
            sumPrice: 0
        };

        this.listenTo(Actions.addToBasket, this.addToBasket);
        this.listenTo(Actions.removeFromBasket, this.removeFromBasket);
        this.listenTo(Actions.clearBasket, this.clearBasket);
    }

    addToBasket(article) {
        if (!this.state.basket.some(element => element.id === article.id)) {
            this.setState({
                basket: this.state.basket.concat([article]),
                sumPrice: _.round(this.state.sumPrice + article.price, 2)
            });
        }
    }

    removeFromBasket(article) {
        if (this.state.basket.some(element => element.id === article.id)) {
            this.setState({
                basket: this.state.basket.filter(element => element.id !== article.id),
                sumPrice: _.round(this.state.sumPrice - article.price, 2)
            });
        }
    }

    clearBasket() {
        this.setState({
            basket: [],
            sumPrice: 0
        });
    }
}

export default BasketStore;