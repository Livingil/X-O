/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

export class InformationLayoutContainer extends React.Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;

		if (isGameEnded) {
			return `Победа:${currentPlayer}`;
		} else {
			if (isDraw) {
				return 'Ничья';
			} else {
				return `Ходит:${currentPlayer}`;
			}
		}
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);
