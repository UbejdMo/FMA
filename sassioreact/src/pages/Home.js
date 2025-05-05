import Header from "../Components/Header";
import HeroRow from "../Components/HeroRow";
import TrustedBy from "../Components/TrustedBy";
import WrapperFull from "../Components/WrapperFull";
import PathSuccess from "../Components/PathSuccess";
import Powerful from "../Components/Powerful";
import Costumers from "../Components/Costumers";
import SpansRow from "../Components/SpansRow";
import StatsRow from "../Components/StatsRow";
import AppScreenshot from "../Components/AppScreenshot";
import Pricing from "../Components/Pricing";
import Questions from "../Components/Questions";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

function Home() {
  return (
    <div className="home">
      <Header />
      <HeroRow />
      <TrustedBy />
      <WrapperFull />
      <PathSuccess />
      <Powerful />
      <Costumers />
      <SpansRow />
      <StatsRow />
      <AppScreenshot />
      <Pricing />
      <Questions />
      <Download />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
