// routes/es_routes.js.js

function esRoutes(req, res) {
    let {title, body} = req.body;
    res.send(`${title}: ${body}`);
}


module.exports = (app, db) => {
    app.post('/elasticsearch', esRoutes);
    
};