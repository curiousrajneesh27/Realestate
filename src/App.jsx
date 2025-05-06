import React from "react";  // ✅ Required for JSX in some setups
import Home from "./pages/Home";
import './index.css';
import StatsImage from "./pages/StatsImage";
import Information from "./pages/Information"
import PopularResidences from "./pages/PopularResidence";
import OurTeam from "./pages/OurTeam";
import Testimonials from "./pages/Testimonials";
import Query from "./pages/Query"
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="font-sans"> 
      <Home />
      <StatsImage/>
      <Information/>
      <PopularResidences/>
      <OurTeam/>
      <Testimonials/>
      <Query/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;