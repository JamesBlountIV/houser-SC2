import React, { Component } from 'react'
import store, {
    UPDATE_NAME,
    UPDATE_ADDRESS,
    UPDATE_CITY,
    UPDATE_STATE,
    UPDATE_ZIP} from '../redux/store';


export default class StepThree extends Component {
    constructor() {
        super();
        const reduxState = store.getState();
        this.state = {
            property_name: reduxState.property_name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                property_name: reduxState.property_name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    render() {
        return (
            <div>
                <div></div>
            </div>
        )
    }
}