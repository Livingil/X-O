import { useState } from "react";
import styles from "./app.module.css";
import FieldLayout from "./field";
import InformationLayout from "./information";
import pole from "./pole.json";
import win from "./win.json";

// cd vite-project

export const AppLayout = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(pole);

	const changeValue = (item, index) => {
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
					setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
				}
			}
		}
	};

	const checkWin = (newField, currentPlayer) => {
		const winPatterns = win;
		return winPatterns.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				newField[a] === currentPlayer &&
				newField[b] === currentPlayer &&
				newField[c] === currentPlayer
			);
		});
	};

	const checkDraw = (newField) => {
		return newField.every((item) => item !== "");
	};

	const newPlay = () => {
		setField(pole);
		setCurrentPlayer("X");
		setIsDraw(false);
		setIsGameEnded(false);
	};

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
				<div className={styles["buttons - container"]}>
					<button className={styles.button} onClick={newPlay}>
						Начать сначала
					</button>
				</div>
			</div>
		</>
	);
};
export default AppLayout;
