import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import Blog1Container from '../containers/Blog1';
import Footer from '../layouts/Footer';

const Blog1 = () => {

  return (
    <>
		<Header Title='Blog1' />
		<Blog1Container />
		<Footer />
    </>
  );
}

export default Blog1;

