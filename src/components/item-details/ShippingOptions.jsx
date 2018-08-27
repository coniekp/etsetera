import React from 'react';

const ShippingOptions = (props) => {

	return (
		<div>
			<div className="details-heading shipping">
				Shipping Options
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

export default ShippingOptions;
