import TopSellersItem from '../TopSellersItem'
// import {team2 , logoSpotify} from '../../allImgs'
// import data from './data.json'
import {TopSellersData1 , TopSellersData2 , TopSellersData3} from '../../data/data-components/data-TopSellers.js'


function TopSellersContainer(){
  return(
	    <section className="about-us-area section-padding-50 clearfix">
	        
	        <div className="container">
	            <div className="row align-items-center">
	                
	                
	                <div className="col-12 col-lg-12">
	                    <div className="who-we-contant">
	                        <div className="dream-dots text-left">
	                            <span className="gradient-text">Creative Creators</span>
	                        </div>
	                        <h4>Top Sellers This Month</h4>
	                    </div>
	                </div>

	                <div className="col-12 col-lg-4">
	                    <div className="creator-sec dd-bg">
	                    	{TopSellersData1 && TopSellersData1.map((item , i) => (
	                    		<TopSellersItem
	                    			key={i}
	                    			rank={item.rank}
	                    			img={item.img.src}
	                    			title={item.title}
	                    			price={item.price}
	                    		/>
	                    	))}
	                    </div>
	                </div>

	                <div className="col-12 col-lg-4 mt-s">
	                    <div className="creator-sec dd-bg">
	                    	{TopSellersData2 && TopSellersData2.map((item , i) => (
	                    		<TopSellersItem
	                    			key={i}
	                    			rank={item.rank}
	                    			img={item.img.src}
	                    			title={item.title}
	                    			price={item.price}
	                    		/>
	                    	))}
	                    </div>
	                </div>

	                <div className="col-12 col-lg-4 mt-s">
	                    <div className="creator-sec dd-bg">
	                    	{TopSellersData3 && TopSellersData3.map((item , i) => (
	                    		<TopSellersItem
	                    			key={i}
	                    			rank={item.rank}
	                    			img={item.img.src}
	                    			title={item.title}
	                    			price={item.price}
	                    		/>
	                    	))}
	                    </div>
	                </div>


	            </div>
	        </div>
	    </section>
  )
}

export default TopSellersContainer