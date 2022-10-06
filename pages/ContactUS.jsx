import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import ContactContainer from '../containers/Contact';
import Footer from '../layouts/Footer';

const Contact = () => {


  return (
	<>
		<Header Title='Contact Us' />
		<ContactContainer />
		<Footer />
	</>
  );
}

export default Contact;

