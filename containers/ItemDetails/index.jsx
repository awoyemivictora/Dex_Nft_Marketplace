import Breadcumb from '../../components/Breadcumb'
import Detailed from './Detailed'
import SidebarArea from './SidebarArea'
import HighestBid from './HighestBid'
import TestPopup from './TestPopup'

// import '../../assets/css/itemDetails.css'

const ItemDetailsContainer = () => {

  return (
    <>
      <Breadcumb  
                  namePage='Item Details'
                  title='Item Details'
      />
      <section className="section-padding-100">
          <div className="container">

              <div className="row">
                  <Detailed />

                  <SidebarArea />

                  <HighestBid />
              </div>
          </div>
      </section>
      <TestPopup />
    </>
  );
}

export default ItemDetailsContainer;