import React from 'react';

const Success = (props) => {
	let {handlePanelChange} = props;

	return (
		<div className="small-panel">
			<div className="message">
				Successfully posted listing from template!
			</div>
			<button onClick={() => handlePanelChange('Home')}>Make another one</button>
		</div>
	)
}

export default Success;
