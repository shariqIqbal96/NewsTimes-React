import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                        <defs>
                            <filter id="shadow">
                                <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#fc6767"/>
                            </filter>
                        </defs>
                        <circle id="spinner" style={{fill:'transparent',stroke:'#dd2476',strokeWidth: '7px',strokeLinecap: 'round'}} cx="50" cy="50" r="45"/>
                    </svg>
                </div>
        )
    }
}

export default Spinner
