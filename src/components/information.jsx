export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
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
