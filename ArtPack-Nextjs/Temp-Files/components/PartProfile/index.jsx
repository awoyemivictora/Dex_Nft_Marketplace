function PartProfile({img1 , img2 , img3 , data}){
	return(
      <div className="col-12 col-lg-3">

         <div className="service_single_content collection-item">
            
              <div className="collection_icon">
                  <img src={img1.src} className="center-block" alt="" />
              </div>
              <span className="aut-info">
                  <img src={img2.src} width="50" alt="" />
              </span>
              <div className="collection_info text-center">
                  <h6>Morgan Wright</h6>
                  <p className="w-text mr-5p">Creative NFTs Designer <img src={img3} width="20" alt="" /></p>
                  <p className="mt-15">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio labore.</p>

                  <div className="search-widget-area mt-15">
                      <form action="#" method="post">
                          <input type="text" name="wallet" id="wallet" value="Xjo03s-osi6732..." />
                          <button className="btn"><i className="fa fa-copy"></i></button>
                      </form>
                  </div>

                  <ul className="social-links mt-30 mb-30">
                    {data && data.map((item , i) => (
                      <li key={i}><a href="#"><span className={item.classIcon}></span></a></li>  
                    ))}
                 </ul>
                  <a href="profile.html" className="more-btn">Follow</a>
              </div>
              
          </div>
      </div>
	)
}

export default PartProfile