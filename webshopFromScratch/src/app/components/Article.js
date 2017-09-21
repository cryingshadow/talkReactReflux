import React from 'react';
import Reflux from 'reflux';
import './Article.scss'

class Article extends Reflux.Component {

    constructor(props) {
        console.log("Article constructor props: ", props);
        super(props);
        this.state = props;
    }

    render() {
        const article = this.props.article;
        console.log("Article render: ", article);
        return (
            <div key={article.id} className="col-sm-6 col-md-3">
                <div className="article " >
                    <img src={article.image} alt={article.name} />
                    <div className="image_overlay"></div>
                    <div className="view_details" onClick={() => console.log("Clicky clicky!")}>
                        Details
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