import Reflux from 'reflux';
import Actions from '../Actions';

class BasketStore extends Reflux.Store {

    constructor() {
        super();
        this.state = {
            basket: []
        };

        this.listenTo(Actions.addToBasket, this.addToBasket);
        this.listenTo(Actions.removeFromBasket, this.removeFromBasket);
        this.listenTo(Actions.clearBasket, this.clearBasket);
    }

    addToBasket(articleId) {
        if (this.state.basket.indexOf(articleId) < 0) {
            this.setState({
                basket: this.state.basket.concat([articleId])
            });
        }
    }

    removeFromBasket(articleId) {
        if (this.state.basket.indexOf(articleId) >= 0) {
            this.setState({
                basket: this.state.basket.filter(element => element !== articleId)
            });
        }
    }

    clearBasket() {
        this.setState({
            basket: []
        });
    }
}

export default BasketStore;