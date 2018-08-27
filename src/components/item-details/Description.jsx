import React from 'react';

const Description = (props) => {
	
	return (
		<div>
			<div className="details-heading description">
				Item Description
			</div>
			<label>
				Title
			</label>
			<input type="text"/>
			<label>
				Description
			</label>
			<input type="text"/>
		</div>
	)
}

export default Description;
