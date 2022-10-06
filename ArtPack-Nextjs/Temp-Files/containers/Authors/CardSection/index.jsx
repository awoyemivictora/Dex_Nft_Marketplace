import InfoComponent from '../../../components/InfoComponent'
import Card from '../../../components/Card'
// import AuthorsData from './data.json'
import {AuthorsData} from '../../../data/data-containers/data-Authors.js'

const CardSection = () => {

  return (
    <>
		<section className="section-padding-0-70 clearfix" >
		    <div className="container">
		        
				<InfoComponent
							titleSm="Explore Authors"
							titleLg="Our Authors"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
				/>
		            

		        <div className="row">
	            	{AuthorsData && AuthorsData.map((item , i) => (
	            		<Card
	            			key={i}
	            			imgBig={item.imgBig.src}
	            			imgSm={item.imgSm.src}
	            			name={item.name}
	            		/>
	            	))}
		        </div>
		    </div>
		</section>
    </>
  );
}

export default CardSection;