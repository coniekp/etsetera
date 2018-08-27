import React from 'react';

const Home = (props) => {
	const { handleTemplateSelect, handleLogIn } = props;
	let $defaults = props.defaultTemplates.map((option) => (
		<option key={'template' + option} value={option}>{option}</option>
	));
	let $saved = (<option>Sign in to see templates</option>);
	return (
		<div className="small-panel">
			<label>Select a template</label>
			<select>
				<optgroup label="Default Templates">
					{$defaults}
				</optgroup>
				<optgroup label="My Templates">
					{$saved}
				</optgroup>
			</select>
			<button onClick={handleTemplateSelect}>Edit</button>
			<button onClick={handleLogIn}>Log In</button>
		</div>
	)
}

export default Home;
