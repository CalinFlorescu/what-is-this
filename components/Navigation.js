import React from 'react';
import Link from 'next/link';

export default class Navigation extends React.Component {
    render() {
        return (
            <ul>
                <li><Link href='/index'><a>Counter</a></Link></li>
                <li><Link href='/event'><a>Event</a></Link></li>
            </ul>
        );
    }
}