import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import News from "./pages/news/News";
// import Home from "./components/navbar/home/Home";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Facts from "./components/facts/Facts";
import Register from "./pages/register/register";
import { Routes, Route } from "react-router-dom";
import Message from "./Message";
// import AQI from ".pages/aqi/AQI.js";

import { AQI } from "./pages/aqi/AQI"
// import Login from "./pages/login/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/news" element={<News />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/message" element={<Message />} />
        <Route path="/aqi" element={<AQI />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
