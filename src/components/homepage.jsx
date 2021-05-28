import MinusCircularButton from './button/minus-circular-button.component';
import PlusCircularButton from './button/plus-circular-button.component';
import ResetCircularButton from './button/reset-circular-button.component';
import CounterDisplay from './counter-display/counter-display.component';

import React, { Component } from "react";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    plus = () => this.setState((state) => {
        return {
            counter: state.counter + 1
        };
    });

    minus = () => this.setState((state) => {
       if (state.counter > 0) {
        return {
			counter: state.counter - 1  
        };}
    });

    reset = () => this.setState(() => {
        return {
            counter: 0
        };
    });

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.counter} />
                <PlusCircularButton onClick={this.plus} />
                <MinusCircularButton onClick={this.minus} />
                <ResetCircularButton onClick={this.reset} />
            </div>
        );
    }
}

export default Homepage;