import dynamic from "next/dynamic";
import Breadcumb from '../../components/Breadcumb'
// import FilterSec from '../../components/FilterSec'
import {ProfileData} from '../../data/data-containers/data-Profile.js'

const FilterSec = dynamic(
  () => {
    return import('../../components/FilterSec');
  },
  { ssr: false }
);

const Discover2Container = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Discover Style 2'
		          title='Discover Style 2'
		/>
		<div className="our_recent_work_area section-padding-100 clearfix">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="section-heading text-center">
		                    <div className="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
		                         <span>Dicover New Items</span>
		                    </div>
		                    <h2 className="wow fadeInUp" data-wow-delay="0.3s">Recent Listed Works</h2>
		                    <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
		                </div>
		            </div>
		        </div>
		    </div>
			<div className="row">
				<FilterSec data={ProfileData} />
			</div>
		</div>
    </>
  );
}

export default Discover2Container;