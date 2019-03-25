import React from 'react';
import PropTypes from 'prop-types';

export default class EvenOdd extends React.Component {
    render() {
        /**
         * Expected result:
         * - render "even" if the this.props.getCounterValue() is even
         * - render "odd" if the this.props.getCounterValue() is odd
         */
        return <span>{this.props.getCounterValue % 2 === 0 ? 'even' : 'odd'}</span>
    }
}

EvenOdd.propTypes = {
    getCounterValue: PropTypes.func.isRequired
}