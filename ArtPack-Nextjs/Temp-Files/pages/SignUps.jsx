import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import SignUpContainer from '../containers/SignUp';
import Footer from '../layouts/Footer';

const SignUp = () => {


  return (
	<>
		<Header Title='Signup' />
		<SignUpContainer />
		<Footer />
	</>
  );
}

export default SignUp;

