import Link from 'next/link'
import Countdown from 'on-react-countdown';

function LiveAuctionsItem({imgBig , imgSm , title , text}){
  return(
    <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="pricing-item ">
            <div className="wraper">
                <Link href="/itemdetails"><img src={imgBig} alt="" /></Link>
                <Link href="/itemdetails"><h4>{text}</h4></Link>
                <div className="owner-info">
                    <img src={imgSm} width="40" alt="" />
                    <Link href="/profile"><h3>{title}</h3></Link>
                </div>
                <span><span className="g-text">Price</span> 0.081 ETH <span className="g-text ml-15">1 of 10</span></span> 
                <div className="count-down titled circled text-center">
                    <Countdown end={1893456000} />
                    <div className="admire">
                      <Link href="/itemdetails"><a className="btn more-btn w-100 text-center my-0 mx-auto ">Place Bid</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveAuctionsItem