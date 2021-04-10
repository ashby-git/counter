// import React from 'react';
import MinusCircularButton from './button/minus-circular-button.component';
import PlusCircularButton from './button/plus-circular-button.component';
import ResetCircularButton from './button/reset-circular-button.component';
import CounterDisplay from './counter-display/counter-display.component';





import React, { Component } from "react";
import ReactDOM from "react-dom";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
    }

    plus() {
        this.setState((state) => {
            return {
                counter: state.counter + 1
            };
        });
    }

    minus() {
        this.setState((state) => {
            return {
                counter: state.counter - 1
            };
        });
    }

    reset() {
        this.setState((state) => {
            return {
                counter: 0
            };
        });
    }

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












// const Homepage = (props) => {

//     return (

//         <div>
//             <CounterDisplay count='0' />

//             <PlusCircularButton onClick={} />
//             <MinusCircularButton />
//             <ResetCircularButton />
//         </div>
//     );
// };

// export default Homepage;