import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import DiscoverContainer from '../containers/Discover';
import Footer from '../layouts/Footer';

const Discover = () => {

  return (
    <>
      <Header Title='Discover' />
      <DiscoverContainer />
      <Footer />
    </>
  );
}

export default Discover;