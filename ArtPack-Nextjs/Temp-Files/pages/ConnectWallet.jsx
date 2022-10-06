import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import ConnectWalletContainer from '../containers/ConnectWallet';
import Footer from '../layouts/Footer';

const ConnectWallet = () => {

  return (
    <>
      	<Header Title='Wallet Connect' />
      	<ConnectWalletContainer />
    	<Footer />
    </>
  );
}

export default ConnectWallet;

