import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import Discover3Container from '../containers/Discover3';
import Footer from '../layouts/Footer';

const Discover3 = () => {

  return (
    <>
      <Header Title='Discover3' />
      <Discover3Container />
      <Footer />
    </>
  );
}

export default Discover3;