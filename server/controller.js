const db = require('./db.js');
const superagent = require('superagent');
const key = 's6kfs8s5n4wxt6klyot3qoik';

const getListingDetailsById = (req, res) => {
	let { id } = req.params;
	let url = 'https://openapi.etsy.com/v2/listings/' + id;
	
	superagent.get(url)
	.query({api_key: key})
	.then(({text}) => res.send(text))
	.catch(err => res.status(500).send('Server oopsie'));

}

const getTemplateByName = (req, res) => {
	let { name } = req.params;

	res.send(`{results: {
            "listing_id": 620325893,
            "category_id": 69150393,
            "title": "Llama Plush, Stuffed Llama, Plush Llama, Llama Stuffie, New Baby Gift",
            "description": "This sweet fluffy llama wants to be your cuddly companion! He is soft and cuddly with a blanket saddle complete with pom pom trim.\n\nThese soft toys are handmade by a mama in Washington state who LOVES llamas.\n\nLlama is made from white fleece and has a white wool felt face with embroidered features. This toy is completely safe for babies. Stuffed with polyester fiberfill. \n\nLlama can be hand washed and air dried.\n\nLlama measures about 11&quot; tall.",
            "price": "32.00",
            "currency_code": "USD",
            "quantity": 1,
            "tags": [
                "stuffed llama",
                "new baby gift",
                "baby boy toy",
                "gender neutral",
                "llama plushie",
                "toddler toy",
                "llama toy",
                "plush llama",
                "alpaca plush",
                "llama doll",
                "baby boy gift",
                "unique kids gift",
                "llama stuffie"
            ],
            "category_path": [
                "Toys"
            ],
            "shipping_template_id": 165251934,
            "processing_min": 1,
            "processing_max": 3,
            "who_made": "i_did",
            "is_supply": "false",
            "when_made": "2010_2018",
            "item_weight": "8",
            "item_weight_units": null,
            "item_length": "12",
            "item_width": "10",
            "item_height": "3",
            "item_dimensions_unit": "in",
            "style": null,
            "non_taxable": false,
            "is_customizable": true,
            "is_digital": false,
            "file_data": "",
            "should_auto_renew": true,
            "taxonomy_id": 1629,
            "taxonomy_path": [
                "Toys & Games",
                "Toys",
                "Stuffed Animals & Plushies"
            ],
            "used_manufacturer": false
        }`);
	
	// db.getTemplatebyName(name, (err, results) => {
	// 	if (err) res.status(500).send('Server oopsie');
	// 	else res.send(results);
	// })

}

const postNewListing = (req, res) => {

}

const postNewTemplate = (req, res) => {

}


module.exports = {
	getListingDetailsById,
	getTemplateByName,
	postNewListing,
	postNewTemplate
}
