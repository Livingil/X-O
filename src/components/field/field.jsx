/* eslint-disable react/prop-types */
import { Component } from 'react';
import { connect } from 'react-redux';
import win from '../db_json/win.json';
import {
	setGameEnd,
	setField,
	setValueDraw,
	setCurrentPlayer,
} from '../.././redux/actions';

export class FieldLayoutContainer extends Component {
	changeValue = (index) => {
		const { field, isGameEnded, currentPlayer, dispatch } = this.props;

		if (!isGameEnded) {
			if (!field[index]) {
				const newField = [...field];
				newField[index] = currentPlayer;
				const hasWon = this.checkWin(newField, currentPlayer);
				dispatch(setGameEnd(hasWon));
				dispatch(setValueDraw(this.checkDraw(newField)));
				dispatch(setField(newField));
				if (!hasWon) {
					dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
				}
			}
		}
	};

	checkWin = (newField, currentPlayer) => {
		return win.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				newField[a] === currentPlayer &&
				newField[b] === currentPlayer &&
				newField[c] === currentPlayer
			);
		});
	};
	checkDraw = (newField) => {
		return newField.every((item) => item !== '');
	};
	render() {
		return (
			<>
				<div className="buttons-container">
					{this.props.field.map((item, index) => (
						<button
							className="button-pole"
							key={index}
							onClick={() => this.changeValue(index)}
						>
							{item}
						</button>
					))}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
