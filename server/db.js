const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'kony',
	password: '',
	database: 'etsetera'
});

const getTemplateByName = (name, callback) => {

	let query = 'SELECT * FROM templates WHERE name = ' + name;
	db.query(query, callback);

}

const postTemplate = (template, callback) => {

	let query = 'INSERT INTO templates (val) values ?';
	db.query(query,[], callback);
	
}

module.exports = {
	getTemplateByName,
	postTemplate
} 