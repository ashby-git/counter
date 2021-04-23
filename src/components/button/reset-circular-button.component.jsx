import React from 'react';

import CircularButton from './circular-button.component'

import './circular-button.styles.scss';

const ResetCircularButton = (props) => (

    <CircularButton onClick={props.onClick}>
        <i className="fas fa-sync-alt"></i>
    </CircularButton>

)

export default ResetCircularButton;