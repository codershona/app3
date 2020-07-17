// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode

// geocode
// Call vabk Abstraction:


const request = require('request')

const geocode = (address, callback) => {
 
 // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2F2b3J5a2l0Y2hlbiIsImEiOiJja2JveGIxeDAxZGQzMndyNTA4bWN5a25mIn0.oHH6k9SzG1rsVqT7TYbviA'
 const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2F2b3J5a2l0Y2hlbiIsImEiOiJja2JveGIxeDAxZGQzMndyNTA4bWN5a25mIn0.oHH6k9SzG1rsVqT7TYbviA'
  

// ? becomes %3F

   // request({ url: url, json: true }, (error, response) => {
    // request({ url, json: true }, (error, response) => {
            request({ url, json: true }, (error, { body }) => {
      if (error) {
        callback('Unable to connect to the locations of the services!!!!', undefined)
      // } else if (response.body.features.length === 0) {
          } else if (body.features.length === 0) {
        callback('Unable to find locations. Please, Try Another Search!!!', undefined)

      } else {
        callback(undefined, {
            // latitude: response.body.features[0].center[0],
            // longitude: response.body.features[0].center[1],
            // latitude: response.body.features[0].center[1],
            latitude: body.features[0].center[1],
            // longitude: response.body.features[0].center[0],
            longitude: body.features[0].center[0],
            // location: response.body.features[0].place_name
            location: body.features[0].place_name

        })
      }

   })

}


module.exports = geocode