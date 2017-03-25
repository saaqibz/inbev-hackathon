// routes/index.js

const weather_routes = require('./weather_routes');
const es_routes = require('./es_routes');
const custom_recs_routes = require('./custom_recs_routes');


module.exports = (app, db) => {
    weather_routes(app, db);
    es_routes(app, db);
    custom_recs_routes(app, db);
}