import * as types from './../constants/ActionTypes'
import * as config from './../constants/Config'
import {remove, reject } from 'lodash';

const uuidv4 = require('uuid/v4');

let defaultState = [];

let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STOGARE));
defaultState = (tasks) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    let id = null;
    let items = [];
    switch(action.type) {
        case types.DELETE_ITEM:
            id = action.id;
            items = [...state];
	        remove(items, (item)=> {
	            return item.id === id;
	        });
	        localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(items));
            return items;
        
        case types.SUBMIT_FORM:
            id = null;
            let {item} = action;
            items = [...state];
            if(item.id) { //edit

            } else { // add
                id = uuidv4();
            }

            items.push({
                id      : id,
                name    : item.name,
                level   : +item.level
            })

            localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(items));
            return items;

        default:
            return state;
    }
} 

export default items;