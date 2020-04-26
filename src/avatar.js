import React from 'react';
import hero from './images/hero.svg';

let Avatar = function (){
    return(
        <div className="avatar"> 
            <img  src={hero}  alt="hero icon"/>

        </div>
    );
}


export default Avatar;