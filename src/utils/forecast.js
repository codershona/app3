// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast


const request = require('request')


const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=' + latitude + ',' + longitude + '&units=f'


  // request({ url: url, json: true }, (error, response) => {
    // request({ url, json: true }, (error, response) => {
        request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!!!', undefined)

    // } else if (response.body.error) {
    } else if (body.error) {
      callback('Unabled to find location!!!!', undefined)

    } else {

        // callback(undefined, console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out."))
        callback(undefined, console.log(body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out."))

    }

  })

}

module.exports = forecast