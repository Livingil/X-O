import styles from './field.module.css';
import win from '../db_json/win.json';
import { useDispatch, useSelector } from 'react-redux';
import {
	setValueDraw,
	setGameEnd,
	setField,
	setCurrentPlayer,
} from '../../redux/actions';

export const FieldLayout = () => {
	const field = useSelector((state) => state.field);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	const dispatch = useDispatch();

	const changeValue = (index) => {
		if (!isGameEnded) {
			if (!field[index]) {
				const newField = [...field];
				newField[index] = currentPlayer;
				const hasWon = checkWin(newField, currentPlayer);
				dispatch(setGameEnd(hasWon));
				dispatch(setValueDraw(checkDraw(newField)));
				dispatch(setField(newField));
				if (!hasWon) {
					dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
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
