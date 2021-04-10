import React from 'react';

import CircularButton from './circular-button.component'

import './circular-button.styles.scss';

const PlusCircularButton = (props) => (

    <CircularButton onClick={props.onClick}>
        <i className="fas fa-plus"></i>
    </CircularButton>

)

export default PlusCircularButton;