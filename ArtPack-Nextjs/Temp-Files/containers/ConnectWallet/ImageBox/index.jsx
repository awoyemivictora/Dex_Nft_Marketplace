import ConnectWalletCoreimgPlatform from "../../../assets/img/core-img/platform.png"

const ImageBox = () => {

  return (
    <>
	    <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 mt-s">
	        <div className="image-box">
	            <img src={ConnectWalletCoreimgPlatform.src} className="center-block img-responsive phone-img" alt="" />
	        </div>
	    </div> 
    </>
  );
}

export default ImageBox;