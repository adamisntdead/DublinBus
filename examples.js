const dublinBus = require('./lib/index');

dublinBus.getStopData(7602).then(console.log)
dublinBus.getRealtimeData(7602).then(console.log)
