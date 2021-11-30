import React from 'react';
import Icon from './Icon';
import "D:/OCRES/WebTech/projetv4/src/Style/Topbar.css";

const Topbar = () => {
    return (
        <div className="Topbar">
            <div className="topbarWrapper">
                 <div className="topLeft">
                    <span className="logo">Fleeebz</span>
                 </div>
                <div className="topRight">
                    <div className="topBarIcons">
            
                         <span className="FleeebzNb">O</span>

                         <Icon/>
                   
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;