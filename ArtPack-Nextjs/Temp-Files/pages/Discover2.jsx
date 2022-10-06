import dynamic from "next/dynamic";

// import Header from '../layouts/Header';
// import Discover2Container from '../containers/Discover2';
import Footer from '../layouts/Footer';


const Discover2Container = dynamic(
  () => {
    return import('../containers/Discover2');
  },
  { ssr: false }
);


const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);

const Discover2 = () => {

  return (
    <>
      <Header Title='Discover2' />
      <Discover2Container />
      <Footer />
    </>
  );
}

export default Discover2;