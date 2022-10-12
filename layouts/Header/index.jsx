import dynamic from "next/dynamic";
import Link from 'next/link'
import {useRouter} from 'next/router';
import {useEffect, useContext, useState} from "react";
// import './navbar.css'
import {NavbarLogo} from '../../utils/allImgs'
import {Addshrink} from '../../utils'
// import Preloader from '../../components/Preloader'
import data from '../../data/data-layouts/data-Head.json'

// IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const Preloader = dynamic(
  () => {
    const {titleData} = useContext(NFTMarketplaceContext);
    return import('../../components/Preloader');
  },
  { ssr: false }
);

function Header({Title}){

    useEffect(() => {

        Addshrink()

    },[window.pageYOffset])

    const router = useRouter()

    //SMART CONTRACT SECTION
    const {connectWallet, walletConnected, currentAccount} = useContext(NFTMarketplaceContext);

  return(
    <>
        <Preloader Title={Title} />
        <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src={NavbarLogo.src} alt="logo" />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Discover</a>
                            <div className="dropdown-menu">
                                {data[0].dataUp && data[0].dataUp.map((item , i) => (
                                    <Link key={i} href={item.path}>
                                        <a className="dropdown-item">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="/Activity">
                                <a className="nav-link">
                                    Activity
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Community</a>
                            <div className="dropdown-menu">
                                {data[2].CommunityData && data[2].CommunityData.map((item , i) => (
                                    <Link key={i} href={item.path}>
                                        <a className="dropdown-item">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu">
                                {data[1].dataDown && data[1].dataDown.map((item , i) => (
                                    <Link key={i} href={item.path}>
                                        <a className="dropdown-item">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/ContactUS">
                                <a className="nav-link">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        {/* <li className="lh-55px"><Link href="/ConnectWallet">
                            <a className="btn login-btn ml-50">
                                Connect Wallet
                            </a>
                        </Link></li> */}

                        {/* <button type="button" onClick={connectWallet}> click me </button> */}
                        {/* <li className='lh-55px'> { walletConnected ? (<span className="btn btn-login ...." onClick={connectWallet} >Create Item</span>) : (<span className="btn btn-login ...." onClick={connectWallet}>  Connect wallet</span>)}</li> */}
                        <li className='lh-55px'> { walletConnected ? (<Link className="nav-link" href="/CreateItem"><a className="btn login-btn ml-50">Create Item</a></Link>) : (<a className="btn login-btn ml-50" onClick={()=> {window.location.reload(); connectWallet();} } >Connect Wallet</a>)}</li>
                        {/* <li className='lh-55px'> { currentAccount == "" ? (<span className="Connect" handleClick={() => connectWallet()} />) : (<Link href={{pathname: "/"}}><span className="Create Item" /></Link> )} </li> */}


                        {/* <li className="nav-item">{walletConnected ? (<Link className="nav-link" href="/CreateItem"><button type="button"> CreateItem</button></Link>) : (<button type="button" onClick={connectWallet}> Connect wallet </button>)}</li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header