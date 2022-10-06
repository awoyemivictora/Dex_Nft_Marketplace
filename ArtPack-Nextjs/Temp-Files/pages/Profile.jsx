import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);

const ProfileContainer = dynamic(
  () => {
    return import('../containers/Profile');
  },
  { ssr: false }
);
// import ProfileContainer from '../containers/Profile';
import Footer from '../layouts/Footer';

// import '../assets/css/profile.css'

const Profile = () => {

  return (
    <>
		<Header Title='Author Profile' />
		<ProfileContainer />
		<Footer />
    </>
  );
}

export default Profile;