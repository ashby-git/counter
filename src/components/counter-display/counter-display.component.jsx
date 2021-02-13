import React from 'react';
import './counter-display.styles.scss';

const CounterDisplay = ({ count }) => {
    return <div className="counter-display">
        <p>{count}</p>
    </div>;
}


export default CounterDisplay;