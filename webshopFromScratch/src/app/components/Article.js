import React from 'react';
import Reflux from 'reflux';
import Actions from '../Actions';
import BasketStore from '../stores/BasketStore';
import './Article.scss';

class Article extends Reflux.Component {

    constructor(props) {
        super(props);
        this.store = BasketStore;
    }

    render() {
        const article = this.props.article;
        return (
            <div key={article.id} className="col-sm-6 col-md-3">
                <div className="article" >
                    <img src={article.image} alt={article.name} />
                    <div className="image_overlay"></div>
                    <div className="view_details" onClick={() => {this.state.basket.indexOf(article.id) < 0? Actions.addToBasket(article.id): Actions.removeFromBasket(article.id)}}>
                        {this.state.basket.indexOf(article.id) < 0? "Add to basket": "Remove from basket"}
                    </div>
                    <div className="stats">
                        <div className="stats-container">
                            <span className="article_price">{article.price}</span>
                            <span className="article_name">{article.name}</span>
                            <p>{article.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;