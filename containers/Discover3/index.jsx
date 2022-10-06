import Breadcumb from '../../components/Breadcumb'
import dynamic from "next/dynamic";
const FilterSec = dynamic(
  () => {
    return import('../../components/FilterSec');
  },
  { ssr: false }
);
// import FilterSec from '../../components/FilterSec'
import SidebarAreaContainer from '../../components/SidebarArea'
import {ProfileData} from '../../data/data-containers/data-Profile.js'

const Discover3Container = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Discover Style 3'
		          title='Discover Style 3'
		/>
		<div className="blog-area section-padding-100">
		    <div className="container">
				<div className="row">
					<FilterSec
						ClassCol="col-12 col-md-9"
						data={ProfileData}
					/>
					<SidebarAreaContainer />
				</div>
		    </div>
		</div>
    </>
  );
}

export default Discover3Container;