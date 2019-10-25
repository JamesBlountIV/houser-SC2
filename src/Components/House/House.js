import React, { Component } from 'react'

export default class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <div>House</div>
                <div>{this.props.name.value}</div>
                <div>{this.props.address.value}</div>
                <div>{this.props.city.value}</div>
                <div>{this.props.state.value}</div>
                <div>{this.props.zip.value}</div>
                <button>Delete</button>
            </div>
        )
    }
}
