import Breadcumb from '../../components/Breadcumb'
import TopCollections from '../../components/TopCollections'
import ListedItems from '../../components/ListedItems'


const DiscoverContainer = () => {

  return (
    <>
      <Breadcumb  
                  namePage='Discover'
                  title='Discover'
      />
      <TopCollections />
      <ListedItems />
    </>
  );
}

export default DiscoverContainer;