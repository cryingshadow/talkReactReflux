import React from 'react';
import Actions from '../Actions';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({article, articleIsNotInBasket}) => {
    return (
        <div key={article.id} className="col-sm-6 col-md-3">
            <div className="article" >
                <img src={article.image} alt={article.name} />
                <div className="image_overlay"></div>
                <div className="view_details" onClick={() => {
                   articleIsNotInBasket
                        ? Actions.addToBasket(article)
                        : Actions.removeFromBasket(article)}}>
                    {articleIsNotInBasket
                        ? "Add to basket"
                        : "Remove from basket"}
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
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
    articleIsNotInBasket: PropTypes.bool.isRequired
};

export default Article;