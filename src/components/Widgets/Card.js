import React from 'react';
import "D:/OCRES/WebTech/projetv4/src/Style/Cards.css";

const Card = (props) => {
    const {country} = props;
    
    //if (country.name === "Afghanistan")
        return (
            <div className="card">
                <img src={country.flag} alt="flag" className="flag"/>
                <div className="data-container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.population} Habitants</li>
                    </ul>
                </div>
            </div>
        );
    
};
export default Card;