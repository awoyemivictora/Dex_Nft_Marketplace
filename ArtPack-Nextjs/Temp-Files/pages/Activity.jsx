import dynamic from "next/dynamic";
import ActivityContainer from '../containers/Activity';
// import Header from '../layouts/Header';

import Footer from '../layouts/Footer';

const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);

// import '../../assets/css/activity.css'
// import './activity.css'

const Activity = () => {

  return (
    <>
      <Header Title='Activity' />
      <ActivityContainer />
      <Footer />
    </>
  );
}

export default Activity;