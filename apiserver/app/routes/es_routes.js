// routes/es_routes.js.js

function esRoutes(req, res) {
	req.get({url: "http://69.30.216.163:9200/posindex/_search?q=bar_product_id=" +req.params.bar_product_id
	}, res.send(body));
}


module.exports = (app, db) => {
	app.get('/:bar_product_id', esRoutes);
};