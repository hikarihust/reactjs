const defaultState = {
    items       : [],
    isShowForm  : true,
    strSearch   : '',
    orderBy     : 'name',
    orderDir    : 'asc',
    itemSelected: null
}

const appReducers = (state = defaultState, action) => {
    switch(action.type) {
        case 'close_form':
            state.isShowForm = false;
            return state;

        case 'open_form':
            state.isShowForm = true;
            return state;

        case 'toggle_form':
            state.isShowForm = !state.isShowForm;
            return state;

        case 'sort_item':
            state.orderBy = action.orderBy;
            state.orderDir = action.orderDir;
            return state;

        default:
            return state;
    }
} 

export default appReducers;