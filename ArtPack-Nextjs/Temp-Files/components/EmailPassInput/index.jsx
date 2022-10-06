const EmailPassInput = ({delay1 , delay2}) => {

  return (
  	<>
      <div className="col-12 col-md-12">
          <div className="group" data-aos-delay={delay1} data-aos="fade-up">
              <input type="text" name="email" id="email" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
          </div>
      </div>
      <div className="col-12">
          <div className="group" data-aos-delay={delay2} data-aos="fade-up">
              <input type="password" name="password" id="password" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
          </div>
      </div>
    </>
  );
}

export default EmailPassInput;

