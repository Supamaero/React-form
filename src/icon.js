import React from 'react';
import next from './images/next.svg';


let Icon = function(){
    return(
        <div className="icon"> 

        <img className="next" src={next}  alt="next icon" height="20px" width="20px" fill="green"/>

        </div>
    );
}


export default Icon;