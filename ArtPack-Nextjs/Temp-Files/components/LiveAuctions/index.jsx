import InfoComponent from '../InfoComponent'
import LiveAuctionsItem from '../LiveAuctionsItem'
import {LiveAuctionsData} from '../../data/data-components/data-LiveAuctions.js'
// import LiveAuctionsData from './data.json'

// import './liveAuctions.css'

function LiveAuctionsContainer(){
  return(
    <section className="features  section-padding-50 ">

        <div className="container">
            <InfoComponent
              titleSm='Live auctions'
              titleLg='Live auctions'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            />
            <div className="row align-items-center">
            	{LiveAuctionsData && LiveAuctionsData.map((item , i) => (
	                <LiveAuctionsItem
                      key={i}
          						imgBig={item.imgBig.src}
          						imgSm={item.imgSm.src}
          						title={item.title}
          						text={item.text}
	                />
            	))}         
            </div>
        </div>
    </section>
  )
}

export default LiveAuctionsContainer