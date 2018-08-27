import React from 'react';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Edit from './Edit.jsx';
import Review from './Review.jsx';
import Save from './Save.jsx';
import Success from './Success.jsx';


class App extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			defaultTemplates: ['blank', 'demo1', 'demo2'],
			savedTemplates: [],
			selectedTemplate: {},
			newListing: {},
			currentView: 'Home'
		}
	}

	startEdit () {
		fetch('http://localhost:3000/api/templates/620325893')
		.then(res => res.json())
		.then(({results}) => console.log(results))
		.then(results => setTemplate (results))
		.then(handlePanelChange);
	}


	logIn () {
		console.log('log me in');
	}

	setTemplate (details) {

		let { 
			title, 
			description,
			price,
			quantity,
			tags,
			category_path,
			shipping_template_id,
			processing_min,
			processing_max,
			who_made,
			is_supply,
			when_made,
			item_weight,
			item_length,
			item_width,
			item_height,
			style,
			is_customizable,
			is_digital,
			should_auto_renew,
			taxonomy_path,
			used_manufacturer
		} = details;

		this.setState ({
			selectedTemplate: details
		})
	}

	setNewListing (editedTemplate) {
		this.setState({
			newTemplate: editedTemplate
		}, () => this.handlePanelChange('Review'))
	}

	setSelectedTemplate (e) {
		let template = e.target.value;
		console.log(template);
		this.setState({
			selectedTemplate: template
		}, () => this.handlePanelChange('Edit'))

		//also fetch template here
	}

	handlePanelChange (option) {
		// let current = this.state.currentView;
		// let next = 'Home';

		// if (current === 'Home') next = 'Edit';
		// else if (current === 'Edit') next = 'Preview';
		// else if (option === 'Save') next = 'Save';
		// else if (option === 'Post') next = 'Success';

		console.log(option);
		this.setState({
			currentView: option
		})
	}

	handleLogIn (e) {
		console.log('Log In to Etsy');
	}

	handlePost () {
		console.log('Posting to Etsy');
		this.handlePanelChange('Success');
	}

	renderHome () {
		let { setSelectedTemplate, handleLogIn } = this;
		let { defaultTemplates, savedTemplates } = this.state;
		
		return (
			<Home
				defaultTemplates={defaultTemplates}
				savedTemplates={savedTemplates}
				handleTemplateSelect={setSelectedTemplate.bind(this)}
				handleLogIn={handleLogIn.bind(this)}
			/>
		)
	}

	renderEdit () {
		let { selectedTemplate } = this.state;
		let { setNewListing, handlePanelChange } = this;

		return (
			<Edit
				template={selectedTemplate}
				handleEditComplete={setNewListing.bind(this)}
				handlePanelChange={handlePanelChange.bind(this)}
			/>
		)
	}

	renderReview () {
		let { newTemplate } = this.state;
		let { handlePanelChange, handlePost } = this;
		
		return (
			<Review 
				template={newTemplate} 
				handlePanelChange={handlePanelChange.bind(this)}
				handlePost={handlePost.bind(this)}
			/>
		)
	}

	renderSave () {
		let { newTemplate } = this.state;
		let { handlePanelChange, handlePost } = this;
		return (
			<Save 
				template={newTemplate}
				handlePanelChange={handlePanelChange.bind(this)}
				handlePost={handlePost.bind(this)}
			/>
		)
	}

	renderSuccess () {
		let { handlePanelChange } = this;
		
		return (
			<Success
				handlePanelChange={handlePanelChange.bind(this)}
			/>
		)
	}

	render () {
		let {currentView} = this.state;
		let actions= {
			Home: this.renderHome.bind(this),
			Edit: this.renderEdit.bind(this),
			Review: this.renderReview.bind(this),
			Save: this.renderSave.bind(this),
			Success: this.renderSuccess.bind(this)
		}

		let $panel = actions[currentView]();

		return (
			<div className="container">
				<Navigation />
				<div>
					{$panel}
				</div>
			</div>
		)
	}
}

export default App;
