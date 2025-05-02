import { useDispatch } from 'react-redux';
import styles from './app.module.css';
import { FieldLayout } from './components/field/field';
import { InformationLayout } from './components/information';
import { RESTART } from './redux/actions';

// cd vite-project

export const AppLayout = () => {
	const dispatch = useDispatch();

	const newPlay = () => {
		dispatch(RESTART);
	};

	return (
		<>
			<div className={styles.container}>
				<h1>Крестики нолики</h1>
				<h2>
					<InformationLayout />
				</h2>
			</div>
			<div>
				<FieldLayout />
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
