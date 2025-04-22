export const initialState = {};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_VALUE_FIELD': {
			return payload;
		}
		case 'SET_VALUE_DRAW': {
			return { ...state, age: payload };
		}
		case 'SET_VALUE_GAME_END': {
			return { ...state, age: payload };
		}
		case 'SET_VALUE_CURRENT_PLAYER': {
			return { ...state, age: payload };
		}

		default:
			return state;
	}
};
