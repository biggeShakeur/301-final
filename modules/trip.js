const axios = require('axios');
const { model } = require('mongoose');
let cache = require('./cache.js');






// const requestTripData = async (request, response) => {
//     let queryLocation = request.query.location
//     console.log(queryLocation)

//     const openTripLocation = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${location}&country=us&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`).then(res => res.json());
//     console.log(openTripLocation);
//     try {
//         let openTripData = await axios.get(url)
//         console.log(openTripData)
//     } catch (err) {

//     }

//     const bboxAPI = await axios.get(`http://api.opentripmap.com/0.1/us/places/bbox?lat_min=${openTripLocation.data[0].lat}&lon_min=${openTripLocation.data[0].lon}&lat_max=${openTripLocation.data[0].lat}&lon_max=${openTripLocation.data[0].lon}&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`).then(res => res.json());
//     console.log(bboxAPI);

//     const xidAPI = await axios.get(`http://api.opentripmap.com/0.1/us/places/xid/?lang=en&xid=${bboxAPI.xid}&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`).then(res => res.json());
//     console.log(xidAPI);

//     response.status(200).send(xidAPI);
// }
// module.exports = requestTripData;
// async function getTripData(location) {
    
//     let url = `https://api.opentripmap.com/0.1/en/places/geoname?name=${location}&country=us&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`;

//     try {
//         if(cache[key] && (Date.now() - cache[key].timestamp < 100000)) {
//             console.log('Cache is here!!')
//         } else  {
//             console.log('cache is NOT here! Requesting data from API')
//             cache[key] = {}; 
//             cache[key].timestamp = Date.now();
//             cache[key].data = await axios.get(url).then(response => parseTrip(response.data))
//         }; 
//         return cache[key].data;
//     } catch(error) {
//         next(error)
//     }
// }

// function parseTrip (TripData) {
//     try {
//         const tripSummaries = TripData.data.map(item => {
//             return new Trip (item)
//         });
//         return Promise.resolve(tripSummaries);
//     } catch (e){
//         return Promise.reject (e);
//     }
// }

// class Trip {
//     constructor(item) {
//         this.lon = item.lon
//         this.lat = item.lat
//     }
// }
// 'use strict';
// const axios = require('axios');
// const map_url = `https://api.opentripmap.com/0.1/en/places/geoname?name=phoenix&country=us&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`;


// async function getMap(request, response, next) {
//     try {
//         response = await axios.get(map_url);
//         let data = app.use(express.json());
//         console.log(data);
//     } catch(error) {
//         next(error)
//     }
// }
