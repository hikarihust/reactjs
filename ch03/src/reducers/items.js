let defaultState = [];

let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    switch(action.type) {
        case 'close_form':
            state = false;
            return state;

        case 'open_form':
            state = true;
            return state;

        case 'toggle_form':
            state = !state;
            return state;

        default:
            return state;
    }
} 

export default items;