import React from 'react';

const Review = (props) => {
	let {newTemplate, handlePost, handlePanelChange} = props;

	return (
		<div>
			<div>Item Details</div>
			<div>
				<button onClick={() => handlePanelChange('Home')}>Switch Template</button>
				<button className="edit" onClick={() => handlePanelChange('Edit')}>Edit</button>
				<button className="save" onClick={() => handlePanelChange('Save')}>Save</button>
				<button className="post" onClick={handlePost}>Post</button>
			</div>
		</div>
	)
}

export default Review;
