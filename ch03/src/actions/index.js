
export const actCloseForm = () => {
	return {
		type : 'close_form'
	}
}

export const actOpenForm = () => {
	return {
		type : 'open_form'
	}
}

export const actToggleForm = () => {
	return {
		type : 'toggle_form'
	}
}

export const actSort = (orderBy, orderDir) => {
	return {
		type : 'sort_item',
		orderBy,
		orderDir
	}
}
