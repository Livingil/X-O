import PropTypes from "prop-types";

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	if (isDraw) {
		return "Ничья";
	} else {
		if (isGameEnded) {
			return `Победа:${currentPlayer}`;
		} else {
			return `Ходит:${currentPlayer}`;
		}
	}
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};

export default InformationLayout;
