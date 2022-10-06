import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import ItemDetailsContainer from '../containers/ItemDetails';
import Footer from '../layouts/Footer';

// import '../../assets/css/itemDetails.css'

const ItemDetails = () => {

  return (
    <>
      <Header Title='Item Details' />
      <ItemDetailsContainer />
      <Footer />
    </>
  );
}

export default ItemDetails;

