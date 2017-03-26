// routes/es_routes.js.js
var es = require('elasticsearch')
var _ = require('lodash')

function esRoutes(req, res) {
	

 var client = new es.Client({
    host: '69.30.216.163:9200',
    log: 'trace'
});

client.search({
  index: 'posindex',
  body: {
    size: 1000,
    query: {
      "constant_score" : { 
          "filter" : {
              "term" : { 
                  "bar_product_id" : req.params.bar_product_id
              }
          }
      },

    }
  }
}, function (error, response) {
  client.search({
    index: 'posindex',
    body: {
      size: 10000,
      query: {
        "constant_score" : { 
            "filter" : {
                "terms" : { 
                    "order_id" : _.map(response.hits.hits, (v) => {
                        return v._source.order_id
                    })
                }
            }
        }
      }
    }
  }, function (error, response) {
   var x = response.hits.hits.filter((v) => { 
      return (v._source.category_name === "beer" || v._source.category_name === "Beer") 
    }
      )
    var o = {}
    _.map(x, (v) => {
      o[v._source.brand_name] = o[v._source.brand_name] ? o[v._source.brand_name] + 1 : 1
    })
    var t3 = _.values(o).sort(function(a, b){return b-a}).slice(0,3)[2]
    var bn = _.map(o, (v, i) => {
      if(v >= t3) return i
    })
    var cleaned = _.compact(bn).sort((a,b) => { return o[b]-o[a] })

  
    res.json(cleaned)
  });

});
}


module.exports = (app, db) => {
	app.get('/:bar_product_id', esRoutes);
};