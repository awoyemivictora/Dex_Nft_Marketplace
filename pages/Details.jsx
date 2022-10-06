import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import DetailsContainer from '../containers/Details';
import Footer from '../layouts/Footer';

const Detailsx = () => {

  return (
    <>
		<Header Title='Details' />
		<DetailsContainer />
		<Footer />
    </>
  );
}

export default Detailsx;

