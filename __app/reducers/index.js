import { combineReducers } from 'redux';

export default combineReducers({
	blank: function(state, action) {
		if (state == null) {
			state = [];
			return state;
		}
	},
});
