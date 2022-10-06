import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import AuthorsContainer from '../containers/Authors';
import Footer from '../layouts/Footer';

const Authors = () => {

  return (
    <>
		<Header Title='Authors' />
		<AuthorsContainer />
		<Footer />
    </>
  );
}

export default Authors;

