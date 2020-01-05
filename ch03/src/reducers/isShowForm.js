const defaultState = false;

const isShowForm = (state = defaultState, action) => {
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

export default isShowForm;