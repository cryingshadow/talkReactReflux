import Reflux from 'reflux';
import Actions from '../Actions';
import ArticleClient from '../clients/ArticleClient';

class ArticleStore extends Reflux.Store {

    constructor() {
        super();
        this.state = {
            articles: []
        };

        this.listenTo(Actions.loadArticles, this.loadArticles);
    }

    loadArticles() {
        const loadCompleted = this.loadCompleted.bind(this);
        const loadFailed = this.loadFailed.bind(this);

        ArticleClient.loadArticles()
            .then(loadCompleted)
            .catch(loadFailed);
    }

    loadCompleted(newArticles) {
        this.setState({
            articles: newArticles
        });
    }

    loadFailed(response) {
        console.log("Could not load the article data: ", response);
    }
}

export default ArticleStore;