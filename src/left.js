import React from 'react';
import Avatar from './avatar';
import Text from './text';
import Paragraph from './paragraph';
import Icon from './icon';

let Left = function (){
    return (
        <div className="left"> 
            <Avatar/>
            <Text/>
            <Paragraph/>
            <Icon/>
        </div>
    );
}


export default Left;