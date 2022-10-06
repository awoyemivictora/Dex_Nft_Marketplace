import Breadcumb from '../../components/Breadcumb'
import InfoComponent from '../../components/InfoComponent'
import FeaturesList from './FeaturesList'
import ImageBox from './ImageBox'
import CardSection from './CardSection'

const ConnectWalletContainer = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Wallet Connect'
		          title='Wallet Connect'
		/>
		<section className="features section-padding-100 ">

			<div className="container">
				<InfoComponent
				  	titleSm='Connect Your Wallet'
				  	titleLg='Connect Wallet'
				  	text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
				/>
			  
				<div className="row">

					<FeaturesList />

					<ImageBox />
				  
				</div>
			</div>
		</section>
		<CardSection />
    </>
  );
}

export default ConnectWalletContainer;