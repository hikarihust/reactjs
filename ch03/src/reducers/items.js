let defaultState = [];

let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    switch(action.type) {
        case 'list_item':
            return state;

        default:
            return state;
    }
} 

export default items;