import styles from './field.module.css';
import { store } from '../../redux/store';
import win from '../db_json/win.json';
import { useEffect, useState } from 'react';

export const FieldLayout = () => {
	const [state, setState] = useState(store.getState());

	const { field, isGameEnded, currentPlayer } = state;

	const changeValue = (index) => {
		if (!isGameEnded) {
			if (!field[index]) {
				const newField = [...field];
				newField[index] = currentPlayer;
				const hasWon = checkWin(newField, currentPlayer);
				store.dispatch({ type: 'SET_VALUE_GAME_END', payload: hasWon });
				store.dispatch({ type: 'SET_VALUE_DRAW', payload: checkDraw(newField) });
				store.dispatch({ type: 'SET_VALUE_FIELD', payload: newField });
				if (!hasWon) {
					store.dispatch({
						type: 'SET_VALUE_CURRENT_PLAYER',
						payload: currentPlayer === 'X' ? 'O' : 'X',
					});
				}
			}
		}
	};

	const checkWin = (newField, currentPlayer) => {
		return win.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				newField[a] === currentPlayer &&
				newField[b] === currentPlayer &&
				newField[c] === currentPlayer
			);
		});
	};

	const checkDraw = (newField) => {
		return newField.every((item) => item !== '');
	};

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	return (
		<>
			<div className={styles['buttons-container']}>
				{field.map((item, index) => (
					<button
						className={styles.button}
						key={index}
						onClick={() => changeValue(index)}
					>
						{item}
					</button>
				))}
			</div>
		</>
	);
};
