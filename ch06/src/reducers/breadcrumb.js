import * as types from './../constants/ActionType';

let defaultState = [
	{to: '/', name: 'Home'},	// HomePage
	// ArtistPage
	// AlbumPage
];

const breadcrumb = (state = defaultState, action) => {
	let {to , name} = action;
	switch(action.type){

		case types.GO_HOME:
			state =  [{to: '/', name: 'Home'}];
			return [...state];

		case types.GO_ARTIST:
			state[1] = {to: action.to, name: action.name};
			return [...state];
			
		case types.GO_ALBUM:

			return state;

		default:
			return state;
	}
}

export default breadcrumb;