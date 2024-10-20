import Cursor from "./components/cursor";
import Header from "./components/header";
import About from "./sections/about";
import Contact from "./sections/contact";
import Discover from "./sections/discover";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import ImagesBoard from "./sections/images-board";
import Info from "./sections/info";
import Marquee from "./sections/marquee";
import MoreInfo from "./sections/more-info";
import Services from "./sections/services";

function App() {
  return (
    <div className="h-full w-full relative max-w-screen-2xl mx-auto">
      <Header />
      <Hero />
      <Info />
      <ImagesBoard />
      <About />
      <Discover />
      <MoreInfo />
      <Services />
      <Marquee />
      <Contact />
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
