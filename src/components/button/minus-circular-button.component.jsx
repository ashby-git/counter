import React from 'react';

import CircularButton from './circular-button.component'

import './circular-button.styles.scss';

const MinusCircularButton = (props) => (

    <CircularButton onClick={props.onClick}>
        <i className="fas fa-minus"></i>
    </CircularButton>

)

export default MinusCircularButton;