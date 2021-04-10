import React from 'react';

import './circular-button.styles.scss';

const CircularButton = (props) => (

    <div className='button'>
        <p className='button-text'>{props.children}</p>
    </div>

)

export default CircularButton