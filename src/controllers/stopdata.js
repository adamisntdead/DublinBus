const request = require('request');
const BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

const getStopData = (stopId, callback) => {
    let requestUrl = `${BASE_URL}/busstopinformation?stopid=${stopId}&format=json`;

    request(requestUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const returnedData = JSON.parse(body);
            // The stop is the first item in the results array
            const stopData = returnedData.results[0];

            callback(error, stopData);
        } else {
            // There was an error
            callback(error);
        }
    });
}

module.exports = getStopData;
