import Breadcumb from '../../components/Breadcumb'
import InfoComponent from '../../components/InfoComponent'
import ContactForm from './ContactForm'

const LoginContainer = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Login'
		          title='Login'
		          animNone={false}
		/>
	    <section className="section-padding-100 contact_us_area" id="contact">
	        <div className="container">
	            <div className="row">
	                <div className="col-12">
	                	<InfoComponent
	                		titleSm='Login Now!'
	                		titleLg='Login to Account'
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

export default LoginContainer;