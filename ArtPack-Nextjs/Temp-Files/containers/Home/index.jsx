import data from '../../data/data-containers/data-Home'
import Link from 'next/link'
// import '../../assets/css/home.css'

const HomeContainer = () => {

  console.log("data" , data)

  return (
      <section className="demo section-padding-100-70" id="demo">
        <div className="container">
          <div className="section-heading text-center">
            <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              {/*<img draggable="false" src="img/svg/section-icon-11.svg" alt="" />*/}
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="0.3s">Choose a demo</h2>
            <p className="wow fadeInUp g-text" data-wow-delay="0.4s">Our NFT Template will be a perfect platform for presenting NFT Marketplace launch. This Landing Page comes in great and clean design</p>
          </div>
          <div className="row">
          	{data && data.map((item , key) => (
	            <div className="col-lg-4 col-md-6 col-sm-12" key={key}>
	              <div className="demo-item">
	                <Link href={item.path} target="_blank">

                    <img draggable="false" src={item.img.src} alt="demo" className="img-responsive" />
                  </Link>
	              </div>
	            </div>
          	))}
          </div>
        </div>
      </section>
  );
}

export default HomeContainer;