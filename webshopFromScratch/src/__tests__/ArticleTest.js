import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Article from '../app/components/Article';

const mockArticle = {
    id: 1,
    name: "The name",
    size: "The size",
    price: "The price",
    image: "The image",
    description: "The description"
};

describe('Article', function() {
    it('should render without throwing an error', function(){
        console.log("article: ", Article);
        expect(shallow(<Article article={mockArticle}/>).contains(<span className="article_price">The price</span>)).toBe(true);
    });
    it('should render the correct price', function(){
        console.log("article: ", Article);
        expect(shallow(<Article article={mockArticle}/>).contains(<span className="article_price">Not the price</span>)).toBe(false);
    });
});