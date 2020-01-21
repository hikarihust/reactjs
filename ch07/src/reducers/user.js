import * as types from './../constants/ActionType';

let defaultState = {
	isLogin: false,
	info: {email: '', uid: '', website: ''}
};


const user = (state = defaultState, action) => {

	switch(action.type){

		case types.USER_LOGIN:
			state.isLogin = true;
			state.info = action.userInfo;	

			return {...state};

		case types.USER_LOGOUT:
			return {...state};
		default:
			return state;
	}
}

export default user;