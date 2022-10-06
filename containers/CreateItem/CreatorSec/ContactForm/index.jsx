import {CreateItemDataImg , CreateItemDataInput} from '../../../../data/data-containers/data-ContactForm'
// import data from './data.json'

const ContactForm = () => {

  return (
    <>
	  <div className="contact_form">
	      <form action="#" method="post" id="main_contact_form" novalidate>
	          <div className="row">
	              <div className="col-12">
	                  <div id="success_fail_info"></div>
	              </div>

	              <div className="col-12 col-md-12">
	                  <p className="w-text">Upload Item File</p>
	                  <div className="group-file">
	                      <p className="g-text">PNG, GIF, WEBP, MP4 or MP3. Max 100mb</p>
	                      <div className="new_Btn more-btn">Upload File</div><br />
	                      <input type="file" name="upload" id="upload-btn" required />
	                      
	                  </div>
	              </div>
	              <div className="col-12 col-md-12">
	                  <div className="group">
	                      <input type="text" name="name" id="name" required />
	                      <span className="highlight"></span>
	                      <span className="bar"></span>
	                      <label>Item name</label>
	                  </div>
	              </div>
	              <div className="col-12 col-md-12">
	                  <div className="mb-15">
	                      <p>Choose item Category</p>
	                      <div className="filers-list ">
	                          {CreateItemDataImg && CreateItemDataImg.map((item , i) => (
	                            <button key={i} className="filter-item">
	                                <img src={item.img.src} alt="" />{item.text}
	                            </button>                                                    
	                          ))}
	                      </div>
	                  </div>
	              </div>
	              <div className="col-12">
	                  <div className="group">
	                      <textarea name="Description" id="Description" required></textarea>
	                      <span className="highlight"></span>
	                      <span className="bar"></span>
	                      <label>Item Description</label>
	                  </div>
	              </div>
	              {CreateItemDataInput && CreateItemDataInput.map((item , i) => (
	                <div key={i} className={`col-12 ${item.fullWidth && 'col-md-12'} ${item.hafWidth && 'col-md-6'}`}>
	                    <div className="group">
	                        <input type="text" name={item.name} id={item.name} required />
	                        <span className="highlight"></span>
	                        <span className="bar"></span>
	                        <label>{item.title}</label>
	                    </div>
	                </div>
	              ))}
	              
	              <div className="col-12 text-center">
	                  <button type="submit" className="more-btn mb-15">Create Item</button>
	              </div>
	          </div>
	      </form>
	  </div>
    </>
  );
}

export default ContactForm;