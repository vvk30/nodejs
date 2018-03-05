const request = require('request');

var getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/key/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            callback('Unable to fetch weather info');
        }
    });
};

module.exports = { // module.exports.getWeather = getWeather;
    getWeather
}