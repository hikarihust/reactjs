import * as types from './../constants/ActionTypes'
import * as config from './../constants/Config'
import {remove, reject } from 'lodash';
let defaultState = [];

let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STOGARE));
defaultState = (tasks) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    switch(action.type) {
        case types.DELETE_ITEM:
            let id = action.id;
            let items = [...state];
	        remove(items, (item)=> {
	            return item.id === id;
	        });
	        localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(items));
            return items;
        
        default:
            return state;
    }
} 

export default items;