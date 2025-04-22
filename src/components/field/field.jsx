/* eslint-disable react/prop-types */

import styles from './field.module.css';

export const FieldLayout = ({ changeValue, field }) => {
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
