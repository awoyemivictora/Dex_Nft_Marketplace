import {useEffect} from "react";
import {SortingCard} from '../../utils'
import Link from 'next/link'
// import '../../assets/css/profile.css'

const FilterSec = ({
    ClassCol="col-12 col-md-12",
    data
}) => {

    useEffect(() => {
      SortingCard()
    },[])

  return (
    <div className={ClassCol}>
        
        <div className="dream-projects-menu mb-50">
            <div className="text-center portfolio-menu">
                <button className="btn active" data-filter="*">All</button>
                <button className="btn" data-filter=".branding">Collectable</button>
                <button className="btn" data-filter=".design">Created</button>
                <button className="btn" data-filter=".development">On Auction</button>
            </div>
        </div>
        <div className="row">
            
            <div className="container">
                <div className="row dream-portfolio" data-aos="fade-up">

                	{data && data.map((item , i) => (

                        <div className={`col-12 col-md-6 col-lg-4 single_gallery_item ${item.ClassChange}`} key={i}>
                            <div className="pricing-item ">
                                <div className="wraper">
                                    <Link href="/itemDetails"><img src={item.imgBig.src} alt="" /></Link>
                                    <Link href="/itemDetails"><h4>Scarecrow in daylight</h4></Link>
                                    <div className="owner-info">
                                        <img src={item.imgSm.src} width="40" alt="" />
                                        <a href="/profile"><h3>{item.title}</h3></a>
                                    </div>
                                    <span><span className="g-text">Price</span> {item.price} ETH <span className="g-text ml-15">1 of 10</span></span> 
                                    <div className="pricing">Highest Bid : <span className="ml-15">{item.bid} ETH</span> </div> 
                                    <div className="admire">
                                        <div className="adm"><i className="fa fa-clock-o"></i>6 Hours Ago</div>
                                        <div className="adm"><i className="fa fa-heart-o"></i>134 Like</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                	))}

                </div>


            </div>

            <div className="col-12 col-lg-12 text-center">
                <a className="btn more-btn" href="/discover">Load More</a>
            </div>
        </div>
    </div>
  );
}

export default FilterSec;