
const axios = require("axios");

const express=require("express");
const app=express();



//   const options = {
//     method: 'GET',
//     url: 'https://environment-news-live.p.rapidapi.com/news/timesofindia',
//     headers: {
//       'X-RapidAPI-Key': '12b76e9c3dmsh60f76c067960f4dp127b20jsneab93f457a09',
//       'X-RapidAPI-Host': 'environment-news-live.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });








const options = {
  method: 'GET',
  url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
  params: {lat: '35.779', lon: '-78.638', hours: '72'},
  headers: {
    'X-RapidAPI-Key': '12b76e9c3dmsh60f76c067960f4dp127b20jsneab93f457a09',
    'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


  app.listen(3000,()=>{
console.log("started");
  });