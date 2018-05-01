const rp = require('request-promise-native');

const BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

function getRealtimeData(stopId) {
    const requestUrl = `${BASE_URL}/realtimebusinformation?stopid=${stopId}&format=json`;

    return rp(requestUrl)
        .then(body => JSON.parse(body).results)
}

module.exports = getRealtimeData;
