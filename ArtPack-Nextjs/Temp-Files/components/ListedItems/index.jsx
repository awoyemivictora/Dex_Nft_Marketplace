import Link from 'next/link'
import InfoComponent from '../InfoComponent'
import ListedItemsItem from '../ListedItemsItem'
import {ListedItemsData} from '../../data/data-components/data-ListedItems.js'
// import ListedItemsData from './data.json'

// import './listedItems.css'

function ListedItemsContainer(){

  // console.log(ListedItemsData , ListedItemsData[0].imgSm)

  return(
    <section className="features section-padding-0-100 ">

        <div className="container">
            <InfoComponent
              titleSm='Dicover New Items'
              titleLg='New Listed Items'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            />

            <div className="row align-items-center">
            	{ListedItemsData && ListedItemsData.map((item , i) => (
	                <ListedItemsItem
                    key={i}
	                	imgBig={item.imgBig.src}
	                	imgSm={item.imgSm.src}
	                	title={item.title}
	                	price={item.price}
	                	bid={item.bid}
	                />
            	))}
                <div className="col-12 col-lg-12 text-center">
                    <Link  href='/Discover'><a className="btn more-btn">Load More</a></Link>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ListedItemsContainer