import React from 'react';
import './Country.css';

const Country = (props) => {
    
    const {name,capital,area,population,borders,flag} =props.country;

    const handleAddCountry = props.handleAddCountry;

    return (
        <div className="country-info">
            <div className="flag">
                <img src={flag} alt=""/>
            </div>
            <div>
                <h2>this is a country: {name}</h2>
                <h3>country count: {countries.length}</h3>
                <h4>capital: {capital}</h4>
                <h4>area: {area}</h4>
                <h5>population: {population}</h5>
                <h6>borders: {borders}</h6>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;