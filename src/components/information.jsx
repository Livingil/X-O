import { useSelector } from 'react-redux';

export const InformationLayout = () => {
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	if (isGameEnded) {
		return `Победа:${currentPlayer}`;
	} else {
		if (isDraw) {
			return 'Ничья';
		} else {
			return `Ходит:${currentPlayer}`;
		}
	}
};
