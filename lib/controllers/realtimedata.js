'use strict';

var rp = require('request-promise-native');

var BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

function getRealtimeData(stopId) {
    var requestUrl = BASE_URL + '/realtimebusinformation?stopid=' + stopId + '&format=json';

    return rp(requestUrl).then(function (body) {
        return JSON.parse(body).results;
    });
}

module.exports = getRealtimeData;