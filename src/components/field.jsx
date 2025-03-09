import styles from "./field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({ changeValue, field }) => {
	return (
		<>
			<div className={styles["buttons-container"]}>
				{field.map((item, index) => (
					<button
						className={styles.button}
						key={index}
						onClick={() => changeValue(item, index)}
					>
						{item}
					</button>
				))}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	changeValue: PropTypes.func.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FieldLayout;
