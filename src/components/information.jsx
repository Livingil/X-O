import { useEffect, useState } from 'react';
import { store } from '../store';

export const InformationLayout = () => {
	const [state, setState] = useState(store.getState());

	const { isDraw, isGameEnded, currentPlayer } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	if (isDraw) {
		return 'Ничья';
	} else {
		if (isGameEnded) {
			return `Победа:${currentPlayer}`;
		} else {
			return `Ходит:${currentPlayer}`;
		}
	}
};
