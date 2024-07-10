import Header from "./components/Header";
import Home from "./pages/Home";
import {Routes, Route }from "react-router-dom"
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TvShows from "./pages/TvShows";

 
function App() {

  return (
    < >
      <Header/>  
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="now_playing" element={<NowPlaying/>} />
      <Route path="popular" element={<Popular/>} />
      <Route path="tv_shows" element={<TvShows/>} />
      </Routes>
    </>
  );
}

export default App;
