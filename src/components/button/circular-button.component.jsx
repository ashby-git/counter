import React from 'react';

import './circular-button.styles.scss';

const CircularButton = (props) => (

    <div className='button' onClick={props.onClick}>
        <p className='button-text'>{props.children}</p>
    </div>

)

export default CircularButton