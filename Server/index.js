
const axios = require("axios");

const express=require("express");
const dotenv=require("dotenv");
const weatherRoute=require("./routes/weather");
const authRoute=require("./routes/auth");
const app=express();

const cors=require("cors");
dotenv.config();
const mongoose =require("mongoose");
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("DB Connection Successfull");
}).catch((err)=>{
  console.log(err);
}
)
app.use(cors());
app.use(express.json());

app.use("/api",authRoute);


// app.use("/api/weather/",weatherRoute);

// app.

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








// const options = {
//   method: 'GET',
//   url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
//   params: {lat: '35.779', lon: '-78.638', hours: '72'},
//   headers: {
//     'X-RapidAPI-Key': '12b76e9c3dmsh60f76c067960f4dp127b20jsneab93f457a09',
//     'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	// console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


  app.listen(5000,()=>{
console.log("started");
  });
