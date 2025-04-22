import styles from './app.module.css';
import { FieldLayout } from './components/field/field';
import { InformationLayout } from './components/information';
import { store } from './store';

// cd vite-project

export const AppLayout = () => {
	// const { currentPlayer, isGameEnded, isDraw, field } = store.getState();

	const newPlay = () => {
		store.dispatch({ type: 'RESTART' });
	};

	return (
		<>
			<div className={styles.container}>
				<h1>Крестики нолики</h1>
				<h2>
					<InformationLayout
					// currentPlayer={currentPlayer}
					// isDraw={isDraw}
					// isGameEnded={isGameEnded}
					/>
				</h2>
			</div>
			<div>
				<FieldLayout
				// changeValue={changeValue}
				// field={field}
				/>
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
