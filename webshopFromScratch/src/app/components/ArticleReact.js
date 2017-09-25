import React from 'react';
import './ArticleReact.scss';

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const article = this.props.article;
        return (
            <div key={article.id} className="col-sm-6 col-md-3">
                <div className="article" >
                    <img src={article.image} alt={article.name} />
                    <div className="image_overlay"></div>
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