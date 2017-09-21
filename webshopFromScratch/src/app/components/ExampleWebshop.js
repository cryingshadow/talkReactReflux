import React from 'react';
import Reflux from 'reflux';
import ArticleStore from '../stores/ArticleStore';
import Actions from '../Actions';
import Article from './Article';
import './ExampleWebshop.scss';

class ExampleWebshop extends Reflux.Component {

    constructor(props) {
        console.log("ExampleWebshop constructor");
        super(props);
        this.store = ArticleStore;
        this.state = {}; // The state will be determined by the reflux store
    }

    componentDidMount() {
        Actions.loadArticles();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        console.log("ExampleWebshop render");
        return (
            <div>
                <div className="row webshop-header">
                    <img className="logo" src="https://www.metroag.de/~/assets/metro/images/logo/metro-logo-full-white.svg" />
                </div>
                <div className="row mt-3">
                    {this.state.articles.map(article =>
                        <Article key={"article" + article.id} article={article} />
                    )}
                </div>
            </div>
        );
    }
}

export default ExampleWebshop