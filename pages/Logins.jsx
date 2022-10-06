import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import LoginContainer from '../containers/Login';
import Footer from '../layouts/Footer';

const Login = () => {


  return (
  	<>
		<Header Title='Login' />
		<LoginContainer />
		<Footer />
	</>

  );
}

export default Login;

