import {createStore} from 'redux';

const initialState = {
    property_name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";

function reducer(state = initialState, action) {
    const {type, payload} = action;
    console.log(type, payload);
    switch(type) {
        case UPDATE_NAME:
            return {...state, property_name: payload};
        case UPDATE_ADDRESS:
            return {...state, address: payload};
        case UPDATE_city:
            return {...state, city: payload};
        case UPDATE_STATE:
            return {...state, state: payload};
        case UPDATE_ZIP:
            return {...state, zip: payload};
            
        default:
            return state;    
    }
}
export default createStore(reducer);