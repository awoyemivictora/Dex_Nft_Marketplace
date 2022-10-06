import dynamic from "next/dynamic";
import AuctionsContainer from '../containers/Auctions';
// import Header from '../layouts/Header';

import Footer from '../layouts/Footer';

const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);

function Auctions(){

  return(
    <>
      <Header Title='Auctions' />
      <AuctionsContainer />
      <Footer />
    </>
  )
}

export default Auctions