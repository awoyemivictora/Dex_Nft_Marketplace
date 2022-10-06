import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import CreateItemContainer from '../containers/CreateItem';
import Footer from '../layouts/Footer';

const CreateItem = () => {

  return (
    <>
      <Header Title='Create Item' />
      <CreateItemContainer />
      <Footer />
    </>
  );
}

export default CreateItem;

