import React, { Component } from 'react'
import store, {
    UPDATE_NAME,
    UPDATE_ADDRESS,
    UPDATE_CITY,
    UPDATE_STATE,
    UPDATE_ZIP} from '../redux/store';


export default class StepOne extends Component {
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

    handleName = e => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: e.target.value
        });
    };
    handleAddress = e => {
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: e.target.value
        });
    };
    handleCity = e => {
        store.dispatch({
            type: UPDATE_CITY,
            payload: e.target.value
        });
    };
    handleState = e => {
        store.dispatch({
            type: UPDATE_STATE,
            payload: e.target.value
        });
    };
    handleZip = e => {
        store.dispatch({
            type: UPDATE_ZIP,
            payload: e.target.value
        });
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
