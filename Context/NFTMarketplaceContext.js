import React, {useState, useEffect, useContext } from 'react'
import web3Modal from "web3modal";
import {ethers} from "ethers";
import Router from "next/router";

//INTERNAL IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = (({children})=> {
    const titleData = "Discover, collect, and sell NFTs";
    return (
        <NFTMarketplaceContext.Provider value={{ 
            titleData,
             }}
             >
            {children}
            </NFTMarketplaceContext.Provider>
    );
});