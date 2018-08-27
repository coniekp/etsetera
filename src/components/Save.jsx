import React from 'react';

class Save extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			name: '',
			saved: false
		}
	}

	saveAsTemplate () {
		console.log('Post to DB');
		this.handleSaveSuccess();
	}

	handleSaveSuccess () {
		this.setState({
			saved: true
		})
	}

	renderSavePanel () {
		let { handlePanelChange } = this.props;
		let { saveAsTemplate } = this;
		return (
			<div className="small-panel">
				<label>
					Template Name:
				</label>
				<input type="text" value={this.state.name} />
				<div className="row">
					<button className="cancel" onClick={() => handlePanelChange('Review')}>Cancel</button>
					<button className="save" onClick={saveAsTemplate.bind(this)}>Save</button>
				</div>
			</div>
		)
	}

	renderSaveSuccessPanel () {
		let { handlePanelChange, handlePost } = this.props;
		let name = this.state.name || 'Anonymous Template';
		let message =
		`'${name}' has been saved.\nPost '${name}' as a listing to Etsy now?`;

		return (
			<div className="small-panel">
				<div className="message">{message}</div>
				<div className="row">
					<button onClick={() => handlePanelChange('Home')}>Done</button>
					<button className="post" onClick={handlePost}>Post</button>
				</div>
			</div>
		)
	}

	render () {
		let $view = this.state.saved? this.renderSaveSuccessPanel(): this.renderSavePanel();
		return (
			<div>
			  {$view}
			</div>
		)
	}
}

export default Save;
