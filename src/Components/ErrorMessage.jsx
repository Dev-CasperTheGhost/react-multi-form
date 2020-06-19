import React, { Component } from 'react'

export default class 
 extends Component {
    render() {
        return (
            <div className="error">
                {this.props.error}
            </div>
        )
    }
}
