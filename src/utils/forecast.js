const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=507c424fd49a1cdfaede4e6f6de9667f&query=${longitude},${latitude}&lang=ru`

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('No internet connection', undefined)
        } else if (body.error) {
            callback('Invalid location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It's ${body.current.temperature} degrees out. There's a ${body.current.precip}% chance of precipitation.`)
        }
    }) 
}

module.exports = forecast