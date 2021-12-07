import React from 'react'
import "D:/OCRES/WebTech/projetv4/src/Style/Doge.css";

const Doge = (props) => {
    const {currency} = props;
    
    //if (country.name === "Afghanistan")
        return (
            <div className="card">
                <img src="http://assets.stickpng.com/images/5a521f522f93c7a8d5137fc7.png" alt="doge" className="flag"/>
                <div className="data-container">
                    <ul>
                        <li>{currency.symbol}</li>
                        <li>{currency.priceChange} $</li>
                    </ul>
                </div>
            </div>
        );
    
};
export default Doge;
