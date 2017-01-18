'use strict';

var request = require('request');
var BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

var getStopData = function getStopData(stopId, callback) {
    var requestUrl = BASE_URL + '/busstopinformation?stopid=' + stopId + '&format=json';

    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var returnedData = JSON.parse(body);
            // The stop is the first item in the results array
            var stopData = returnedData.results[0];

            callback(error, stopData);
        } else {
            // There was an error
            callback(error);
        }
    });
};

module.exports = getStopData;