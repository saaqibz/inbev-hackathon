// routes/note_routes.js

function customRecsRoutes(req, res) {
    let {title, body} = req.body;
    res.send(`${title}: ${body}`);
}


module.exports = (app, db) => {
    app.get('/custom-recs', customRecsRoutes)
};