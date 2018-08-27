import React from 'react';
import Description from './item-details/Description.jsx';
import Inventory from './item-details/Inventory.jsx';
import ShippingOptions from './item-details/ShippingOptions.jsx';
import ItemDimensions from './item-details/ItemDimensions.jsx';

class Edit extends React.Component {
	constructor(props) {
		super (props);
		this.state = {

		}
	}


	render () {
		let {template, handlePanelChange, handleEditComplete} = this.props;
		return (
			<div className="full-panel">
				<div>
					<Description />
					<Inventory />
					<ShippingOptions />
					<ItemDimensions />
				</div>
				<div>
					<button onClick={()=> handlePanelChange('Home')}>Reset</button>
					<button className="review" onClick={handleEditComplete}>Review</button>
				</div>
			</div>
		)
	}
}

export default Edit;
