import pole from '../components/db_json/pole.json';

export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: pole,
};
