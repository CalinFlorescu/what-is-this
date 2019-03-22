import React from 'react';
import EvenOdd from '../components/EvenOdd';
import Navigation from '../components/Navigation';

export default class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        // increase counter in every second
        this.timer = setInterval(this.inceaseCounter, 1000);
    }

    componentWillUnmount() {
        // clear timer
        clearInterval(this.timer);
    }

    /**
     * Increase counter
     */
    inceaseCounter() {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }

    /**
     * Get counter value from state
     */
    getCounterValue() {
        return this.state.counter;
    }

    render() {
        /**
         * Expected results:
         * counter = 1 / odd
         * counter = 2 / even
         */
        return <div>
            <h1>Timer example</h1>
            <Navigation/>
            counter = {this.state.counter} 
             / 
            <EvenOdd getCounterValue={this.getCounterValue} />
        </div>
    }
}