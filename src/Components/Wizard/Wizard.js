import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }


    addHouse = (e) => {
        e.preventDefault();
        const {property_name, address, city, state, zip} = this.state;
        axios.post("/api/post", {property_name, address, city, state, zip}).then(res => {
           this.props.history.push('/'); 
        }).catch(err => {
            console.log(err);
        })
    }

    handleName = (val) => {
        this.setState({property_name: val})
    }
    handleAddress = (val) => {
        this.setState({address: val})
    }
    handleCity = (val) => {
        this.setState({city: val})
    }
    handleState = (val) => {
        this.setState({state: val})
    }
    handleZip = (val) => {
        this.setState({zip: val})
    }

    render() {
        return (
            <div>
                <div>Wizard</div>
                <input value={this.state.input} onChange={e => this.handleName(e.target.value)} placeholder="Name"/>
                <input value={this.state.input} onChange={e => this.handleAddress(e.target.value)} placeholder="Address"/>
                <input value={this.state.input} onChange={e => this.handleCity(e.target.value)} placeholder="City"/>
                <input value={this.state.input} onChange={e => this.handleState(e.target.value)} placeholder="State"/>
                <input value={this.state.input} onChange={e => this.handleZip(e.target.value)} placeholder="Zipcode"/>
                <Link to="/">
                    <div onSubmit = {this.addHouse}>
                    <button type="submit">Complete</button>
                    <button>Cancel</button>
                    </div>
                </Link>
                
            </div>
        )
    }
}
