import Link from 'next/link'

const TestPopup = () => {

  return (
    <>
      <div id="test-popup" className="white-popup mfp-hide">
        <div className="top-form-header">
            <h4>Place a Bid</h4>
        </div>
        <form action="#" method="post" id="main_login_form" novalidate="">
              <div className="row">
               
                 <div className="col-12 col-md-12">
                      <div className="group">
                          <input type="text" name="name" id="name0" required="" />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Your Bid Amount</label>
                      </div>
                      <p className="g-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas maxime quo magnam, rerum odio quia asperiores, voluptatum impedit sit, amet consectetur adipisicing elit.</p>
                  </div>
                  <div className="col-12 col-sm-5 text-left ">
                      <Link href="/ConnectWallet"><a className="btn more-btn">Place Bid</a></Link>
                  </div>
                  
              </div>
        </form>
      </div>
    </>
  );
}

export default TestPopup;