import Banner from "../../components/banner/Banner";
import PopularRoom from "../../components/PopularRoom/PopularRoom";
import Property from "../../components/property/Property";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
  <div>
    <Banner></Banner>
    <Property></Property>
    <PopularRoom/>
    <Review/>
  </div>);
};

export default Home;
