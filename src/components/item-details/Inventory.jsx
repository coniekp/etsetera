import React from 'react';

const Inventory = (props) => {

	return (
		<div>
			<div className="details-heading inventory">
				Inventory and Pricing
			</div>
			<label>
				Price
			</label>
			<input type="text"/>
			<label>
				Quantity
			</label>
			<input type="text"/>
		</div>
	)
}


export default Inventory;

