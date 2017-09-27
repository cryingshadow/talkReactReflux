import React from 'react';
import Actions from '../Actions';
import PropTypes from 'prop-types';
import './ExampleWebshopHeader.scss';

const ExampleWebshopHeader = ({sumPrice}) => {
    return (
        <div className="row webshop-header">
            <img className="logo" src="https://www.metroag.de/~/assets/metro/images/logo/metro-logo-full-white.svg" />
            <div className="basket" onClick={() => Actions.clearBasket()}>
                <span>{sumPrice + "€"}</span>
            </div>
        </div>
    );
};

ExampleWebshopHeader.propTypes = {
    sumPrice: PropTypes.number.isRequired
};

export default ExampleWebshopHeader;