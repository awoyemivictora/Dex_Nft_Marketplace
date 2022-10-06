import Head from 'next/head'
import authors1 from "../../../assets/img/authors/1.png"
import {data} from '../../../data/data-containers/data-HighestBid.js'
import Countdown from 'on-react-countdown';

// import data from './data.json'

const HighestBid = () => {


  return (
    <>
      <div className="col-12 col-lg-3 mt-s">
          <h4 className="mb-15">Latest Bids</h4>
          <div className="highest-bid bid-item">
              {data && data.map((item , i) => (
                <div key={i} className={`author-item ${item.addMargin && 'mb-0'}`}>
                    <div className="author-img ml-0"><img src={item.img.src} width="40" alt=""/></div>
                    <div className="author-info">
                        <p>by<span className="w-text"> {item.text}</span></p>
                        <p>Bid at<span className="w-text"> {item.bid} ETH</span></p>
                    </div>
                    <div className="bid-price">
                        <p>$346.38</p>
                        <p><i className="fa fa-clock-o mr-5p"></i>{item.time} AM</p>
                    </div>
                </div>
              ))}
          </div>
          <h4 className="mb-15 mt-30">History</h4>
          <div className="highest-bid bid-item">
              <div className="author-item mb-0">
                  <div className="author-img ml-0"><img src={authors1.src} width="40" alt="" /></div>
                  <div className="author-info">
                      <p>Listed by<span className="w-text"> Amillia Nnor</span></p>
                      <p>Price<span className="w-text mr-15"> 0.212 ETH</span><span><i className="fa fa-clock-o mr-5p"></i>01:36 AM</span></p>
                  </div>
                  
              </div>
          </div>
          <div className="biding-end">
              <h4 className="mb-15">Biding Ends In :</h4>
              <div className="count-down titled circled text-center">
                <Countdown end={1893456000} />
              </div>
          </div>

      </div>
    </>
  );
}

export default HighestBid;