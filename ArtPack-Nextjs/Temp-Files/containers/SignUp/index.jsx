import Breadcumb from '../../components/Breadcumb'
import InfoComponent from '../../components/InfoComponent'
import ContactForm from './ContactForm'

const SignUpContainer = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Signup'
		          title='Signup'
		          animNone={false}
		/>
		<section className="section-padding-100 contact_us_area" id="contact">
		  <div className="container">
		      <div className="row">
		          <div className="col-12">
		            <InfoComponent
		              titleSm='Signup Now!'
		              titleLg='Create New Account'
		              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
		            />
		          </div>
		      </div>

		      <ContactForm />
		  </div>
		</section>
    </>
  );
}

export default SignUpContainer;