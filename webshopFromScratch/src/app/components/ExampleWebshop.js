import React from 'react';
import Reflux from 'reflux';
import Actions from '../Actions';
import Article from './Article';
import ExampleWebshopHeader from './ExampleWebshopHeader';
import ArticleStore from '../stores/ArticleStore';
import BasketStore from '../stores/BasketStore';
import _ from 'lodash';

class ExampleWebshop extends Reflux.Component {

    constructor(props) {
        super(props);
        this.stores = [ArticleStore, BasketStore];
    }

    componentDidMount() {
        Actions.loadArticles();
    }

    render() {
        return (
            <div>
                <ExampleWebshopHeader sumPrice={this.state.sumPrice}/>
                <div className="row mt-3">
                    {this.state.articles.map(article =>
                        <Article key={"article" + article.id}
                             article={article}
                             articleIsNotInBasket={!_.some(this.state.basket, { "id": article.id })}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default ExampleWebshop