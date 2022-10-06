import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import Blog2Container from '../containers/Blog2';
import Footer from '../layouts/Footer';

const Blog2 = () => {

  return (
    <>
		<Header Title='Blog2' />
		<Blog2Container />
		<Footer />
    </>
  );
}

export default Blog2;

