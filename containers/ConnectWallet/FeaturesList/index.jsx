import ConnectWalletIconswallet from "../../../assets/img/icons/wallet.png"

// import whoWeData from './data.json'
import {whoWeData} from '../../../data/data-containers/data-whoWe.js'

const FeaturesList = () => {

  return (
    <>
	    <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
	        <div className="features-list">
	            <div className="who-we-contant text-center">
	                <img src={ConnectWalletIconswallet.src} className="mb-15" width="90" alt="" />
	                <h4 className="w-text mb-30" data-wow-delay="0.3s">Connect Your Wallet to Start collecting, Buying and Selling NFTs.</h4>
	                {whoWeData && whoWeData.map((item , i) => (
	                    <div key={i} className="pricing-item v2">
	                        <img src={item.img.src} width="30" className="wal-icon" alt="" />{item.text}
	                    </div>                            	
	                ))}
	            </div>
	        </div>
	    </div>
    </>
  );
}

export default FeaturesList;