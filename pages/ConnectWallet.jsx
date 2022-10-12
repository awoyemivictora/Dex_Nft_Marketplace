import React, { useState, useEffect, useContext } from "react";

import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import ConnectWalletContainer from '../containers/ConnectWallet';
import Footer from '../layouts/Footer';

import {NFTMarketplaceProvider} from "../Context/NFTMarketplaceContext";


const ConnectWallet = () => {
  
  return (
    <>
        <NFTMarketplaceProvider>
      	<Header Title='Wallet Connect' />
      	<ConnectWalletContainer />
    	<Footer />
      </NFTMarketplaceProvider>
    </>
  );
}

export default ConnectWallet;

