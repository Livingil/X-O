import { initialState } from './initial_state';

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_VALUE_FIELD': {
			return { ...state, field: payload };
		}
		case 'SET_VALUE_DRAW': {
			return { ...state, isDraw: payload };
		}
		case 'SET_VALUE_GAME_END': {
			return { ...state, isGameEnded: payload };
		}
		case 'SET_VALUE_CURRENT_PLAYER': {
			return { ...state, currentPlayer: payload };
		}
		case 'RESTART': {
			return initialState;
		}

		default:
			return state;
	}
};
