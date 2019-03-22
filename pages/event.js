import React from 'react';
import Navigation from '../components/Navigation';
import {handleChange} from '../utils';

export default class Event extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    render() {
        /**
         * Expected result
         * Only the alphabeticaly charachters will appears in uppercase
         */
        return <div>
            <h1>Event example</h1>
            <Navigation/>
            Type your text: <input type="text" value={this.state.value} onChange={handleChange}/>
        </div>
    }
}