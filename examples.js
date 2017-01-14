var dublinBus = require('./lib/index');

dublinBus.getStopData(7602, function(err, results) {
  console.log(JSON.stringify(results));
})

dublinBus.getRealtimeData(7602, function(err, results) {
  console.log(JSON.stringify(results));
})
