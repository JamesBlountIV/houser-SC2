import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houseList: []
        }
    }

    
    getHouses = () => {
        const {houseList} = this.state;
        axios.get("/api/houses", {houseList})
        .then(response => {
            console.log(response.data);
            this.setState({houseList: response.data})
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    };
    componentDidMount() {
    this.getHouses();
    };

    deleteHouse = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then(response => {
            this.getHouses();
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        const mapHouseList = this.state.houseList.map(() => {
            return <House deleteHouse={this.deleteHouse}/>;
        })
        return (
            <div>
                <div>Dashboard</div>
                <Link to="/wizard">
                    <button>Add New Property</button>
                </Link>
                {mapHouseList}
            </div>
        )
    }
}
