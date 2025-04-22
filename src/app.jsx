import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { FieldLayout } from './components/field/field';
import { InformationLayout } from './components/information';
import pole from './components/db_json/pole.json';
import win from './components/db_json/win.json';
// import { store } from './store';

// cd vite-project

export const AppLayout = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(pole);

	const changeValue = (index) => {
		if (!isGameEnded) {
			if (!field[index]) {
				const newField = [...field];
				newField[index] = currentPlayer;
				const hasWon = checkWin(newField, currentPlayer);
				setIsGameEnded(hasWon);
				checkDraw(newField);
				setIsDraw(checkDraw(newField));
				setField(newField);
				if (!hasWon) {
					setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
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

	const newPlay = () => {
		setField(pole);
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
	};

	useEffect(() => {}, []);

	return (
		<>
			<div className={styles.container}>
				<h1>Крестики нолики</h1>
				<h2>
					<InformationLayout
						currentPlayer={currentPlayer}
						isDraw={isDraw}
						isGameEnded={isGameEnded}
					/>
				</h2>
			</div>
			<div>
				<FieldLayout changeValue={changeValue} field={field} />
			</div>
			<div className={styles.container}>
				<div className={styles['buttons - container']}>
					<button className={styles.button} onClick={newPlay}>
						Начать сначала
					</button>
				</div>
			</div>
		</>
	);
};
