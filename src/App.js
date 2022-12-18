import React from 'react';
import './styles.css';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import Overlay from './components/Overlay';

// google analytics
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-179589074-1'; // tracking id
ReactGA.initialize(TRACKING_ID);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: true,
		};
	}

	handleShowOverlay = () => {
		this.setState({ showOverlay: false });
	};

	componentDidMount() {
		this.autoshowOverlay = setTimeout(
			function() {
				this.handleShowOverlay();
			}.bind(this),
			3000
		);
	}

	render() {
		return (
			<div>
				<Overlay active={this.state.showOverlay} marginTop='150px'>
					<Favicon url='data:image/png;base64,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'></Favicon>
					<BrowserRouter>
						<BaseLayout />
					</BrowserRouter>
				</Overlay>
			</div>
		);
	}
}