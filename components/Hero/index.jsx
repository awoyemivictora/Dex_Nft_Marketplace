const HeroContainer = ({
	ClassDiv,
	addMoving,
	title,
	textUp,
	SpanTex,
	textDown,
	linkUp,
	linkDown
}) => {
	return(
	    <section className={ClassDiv} id="home">
	        {addMoving && <div className="moving-bg"></div>}
	        <div className="hero-section-content">
	            
	            <div className="container ">
	                <div className="row align-items-center">
	                    <div className="col-12 col-lg-6 col-md-12">
	                        <div className="welcome-content">
	                            <div className="promo-section">
	                                <h3 className="special-head gradient-text">{title}</h3>
	                            </div>
	                            <h1>{textUp} <span className="gradient-t">{SpanTex}</span> </h1>
	                            <p className="w-text">{textDown}</p>
	                            <div className="dream-btn-group">
	                                <button className="btn btn-explore more-btn mr-3">{linkUp}</button>
	                                <button className="btn btn-Collect more-btn">{linkDown}</button>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-6"></div>
	                </div>
	            </div>
	        </div>
	    </section>
	)
}

export default HeroContainer