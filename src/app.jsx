/* eslint-disable react/prop-types */
import React from 'react';
import { FieldLayout } from './components/field/field';
import { InformationLayout } from './components/information';
import { RESTART } from './redux/actions';
import { connect } from 'react-redux';

export class AppLayoutContainer extends React.Component {
	constructor() {
		super();
		this.newPlay = this.newPlay.bind(this);
	}

	newPlay() {
		const { dispatch } = this.props;
		dispatch(RESTART);
	}
	render() {
		return (
			<>
				<div className="text-center max-w-full m-auto">
					<h1 className="text-2xl font-bold">Крестики нолики</h1>
					<h2 className="text-base font-medium  animate-bounce">
						<InformationLayout />
					</h2>
				</div>
				<div>
					<FieldLayout />
				</div>
				<div className="text-center max-w-2/12 m-auto">
					<button className="button" onClick={this.newPlay}>
						Начать сначала
					</button>
				</div>
			</>
		);
	}
}
export const AppLayout = connect()(AppLayoutContainer);
