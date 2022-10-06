import Breadcumb from '../../components/Breadcumb'
import LiveAuctions from '../../components/LiveAuctions'

const AuctionsContainer = () => {

  return (
  	<>
      <Breadcumb  
                  namePage='Auctions'
                  title='Auctions'
      />
      <LiveAuctions />

    </>
  );
}

export default AuctionsContainer;
