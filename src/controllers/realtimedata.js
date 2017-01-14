const request = require('request');
const BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

const getRealtimeData = (stopId, callback) => {
    let requestUrl = `${BASE_URL}/realtimebusinformation?stopid=${stopId}&format=json`;

    request(requestUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const returnedData = JSON.parse(body);
            const results = returnedData.results;

            callback(error, results);
        } else {
            // There was an error
            callback(error);
        }
    });
}

module.exports = getRealtimeData;
