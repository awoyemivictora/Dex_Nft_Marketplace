import {useEffect} from "react";
import dynamic from "next/dynamic";
// import { NavLink } from "react-router-dom";
import {SortingCard} from '../../utils'
// import CollectionItem from './CollectionItem'
import Breadcumb from '../../components/Breadcumb'
// import FilterSec from '../../components/FilterSec'
import {ProfileData} from '../../data/data-containers/data-Profile.js'

const FilterSec = dynamic(
  () => {
    return import('../../components/FilterSec');
  },
  { ssr: false }
);

const CollectionItem = dynamic(
  () => {
    return import('./CollectionItem');
  },
  { ssr: false }
);

// import '../../assets/css/profile.css'

const ProfileContainer = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Author Profile'
		          title='Author Profile'
		/>
		<section className="blog-area section-padding-100">
		    <div className="container">

		        <div className="row">

	                <CollectionItem />

		            <FilterSec
		            	ClassCol="col-12 col-md-9"
		            	data={ProfileData}
		            />
		            
		        </div>
		    </div>
		</section>
    </>
  );
}

export default ProfileContainer;