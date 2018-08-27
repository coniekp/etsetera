const {
	getListingDetailsById,
	getTemplateByName,
	postNewListing,
	postNewTemplate
} = require('./controller.js');
const express = require('express');
const app = express();

//TODO: use a reverse proxy cache to improve performance f static serv
//use a reverse proxy

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/listings/:id', getListingDetailsById);
app.get('/api/template/:name', getTemplateByName);
app.post('/api/listings/new', postNewListing);
app.post('/api/template/new', postNewTemplate);

app.listen(3000, () => console.log('Listening at 3000'));
