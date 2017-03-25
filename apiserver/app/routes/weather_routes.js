// routes/note_routes.js

function weatherRoutes(req, res) {
    let {title, body} = req.body;
    res.send(`${title}: ${body}`);
}


module.exports = (app, db) => {
    app.post('/weather', weatherRoutes)
};