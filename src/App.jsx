import "./App.css";
import Characteristics from "./components/Characteristics";
import HeroSection from "./components/HeroSection";
import LastSubscribeSection from "./components/LastSubscribeSection";
import Nav from "./components/Nav";
import PriceSection from "./components/PriceSection";
import Reviews from "./components/Reviews";
import Social from "./components/Social";

function App() {
  return (
    <>
      <div>
        <Nav />
        <HeroSection />
        <Characteristics />
        <PriceSection />
        <Reviews />
        <LastSubscribeSection />
        <Social />
      </div>
    </>
  );
}

export default App;
