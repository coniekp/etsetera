import React from 'react';

const ItemDimensions = (props) => {


	return (
		<div>
			<div className="details-heading dimensions">
				Item Dimensions
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
export default ItemDimensions;
