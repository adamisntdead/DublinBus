const rp = require('request-promise-native');

const BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

function getStopData(stopId) {
    const requestUrl = `${BASE_URL}/busstopinformation?stopid=${stopId}&format=json`;

    return rp(requestUrl)
        .then(body => JSON.parse(body).results[0])
}

module.exports = getStopData;

