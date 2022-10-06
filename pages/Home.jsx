import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import HomeContainer from '../containers/Home';
import Footer from '../layouts/Footer';

// import '../assets/css/home.css'
// import './home.css'

const Home = () => {

  return (
  	<>
	    <HomeContainer />

    </>
  );
}

export default Home;

