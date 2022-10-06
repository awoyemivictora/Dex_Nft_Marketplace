import Breadcumb from '../../components/Breadcumb'
import TopSellers from '../../components/TopSellers'
import CardSection from './CardSection'

const AuthorsContainer = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Authors'
		          title='Authors'
		/>
		<TopSellers />
		<CardSection />
    </>
  );
}

export default AuthorsContainer;