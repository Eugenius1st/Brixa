// common components
import Header from 'components/header';
import Nav from 'components/nav';
// home components
import Advertise from 'pages/home/components/advertise';
import MainProduct from 'pages/home/components/mainProducts';
import Merit from 'pages/home/components/merit';
import Reviews from 'pages/home/components/reviews';

const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <Advertise />
            <Merit />
            <MainProduct />
            <Reviews />
            <Nav />
        </div>
    );
};

export default Home;
