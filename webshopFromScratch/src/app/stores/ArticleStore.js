import Reflux from 'reflux';
import Actions from '../Actions';
import ArticleClient from '../clients/ArticleClient';

class ArticleStore extends Reflux.Store {

    constructor() {
        console.log("ArticleStore constructor");
        super();
        this.state = {
            articles: []
        };

        this.listenTo(Actions.loadArticles, this.loadArticles);
    }

    loadArticles() {
        console.log("ArticleStore loadArticles");
        const loadCompleted = this.loadCompleted.bind(this);
        const loadFailed = this.loadFailed.bind(this);

        ArticleClient.loadArticles()
            .then(loadCompleted)
            .catch(loadFailed);
    }

    loadCompleted(newArticles) {
        console.log("ArticleStore loadCompleted: ", newArticles);
        this.setState({
            articles: newArticles
        });
        console.log("ArticleStore loadCompleted and state set");
    }

    loadFailed(response) {
        console.log("Could not load article data: ", response);
    }
}

export default ArticleStore;