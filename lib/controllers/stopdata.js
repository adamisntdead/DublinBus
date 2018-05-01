'use strict';

var rp = require('request-promise-native');

var BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

function getStopData(stopId) {
    var requestUrl = BASE_URL + '/busstopinformation?stopid=' + stopId + '&format=json';

    return rp(requestUrl).then(function (body) {
        return JSON.parse(body).results[0];
    });
}

module.exports = getStopData;