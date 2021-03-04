import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import More from "./components/More";
import Footer from "./components/Footer";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <More />
      <Footer />
    </div>
  );
}

export default App;
