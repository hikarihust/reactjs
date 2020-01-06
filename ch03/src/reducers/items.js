const defaultState = [
    { id: "A1", name: "Coding", level: 0 },
    { id: "A2", name: "Football", level: 1 },
    { id: "A3", name: "Watch TV", level: 2 }
];

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