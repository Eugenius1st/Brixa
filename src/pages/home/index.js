// common components
import Header from "components/header";
import Nav from "components/nav";
// home components
import Advertise from "pages/home/components/advertise";
import MainProduct from "pages/home/components/mainProducts";
import Merit from "pages/home/components/merit";
import Reviews from "pages/home/components/reviews";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="h-[20px]"></div>
      <Header />
      <div className="relative z-[1]">
        <Advertise />
      </div>
      <Merit />
      <MainProduct />
      <Reviews />
      <div className="h-[100px]"></div>
      <div className="relative z-[2]">
        <Nav />
      </div>
    </div>
  );
};

export default Home;
