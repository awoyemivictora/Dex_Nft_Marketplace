const Sidebar = ({data}) => {

  return (
	<div className="col-12 col-md-3">
		<div className="sidebar-area">
			{/* Search Widget */}
			<div className="search-widget-area mb-50 wow fadeInUp" data-wow-delay="0.2s">
			  <form action="#" method="post">
			    <input type="search" name="search" id="search" placeholder="Search..." />
			    <button type="submit" className="btn"><i className="fa fa-search" /></button>
			  </form>
			</div>
			{/* Don't Miss Widget */}
			<div className="donnot-miss-widget mb-50">
			  <div className="widget-title wow fadeInUp" data-wow-delay="0.3s">
			    <h5>Do not miss</h5>
			  </div>
			  {data && data.map((item , key) => (
				  <div className="single-dont-miss-post mb-30 wow fadeInUp" key={key}>
				    <div className="dont-miss-post-thumb">
				      <img src={item.img.src} alt="" />
				    </div>
				    <div className="dont-miss-post-content">
				      <a href="#">{item.title}</a>
				      <span>{item.text}</span>
				    </div>
				  </div>
			 	))}

			</div>
			{/* Subscribe Widget */}
			<div className="subscribe-widget mb-50">
			  <div className="widget-title wow fadeInUp" data-wow-delay="0.9s">
			    <h5>subscribe</h5>
			  </div>
			  <div className="subscribe-form wow fadeInUp" data-wow-delay="1s">
			    <form action="#">
			      <input type="email" name="email" id="subs_email" placeholder="Your Email" />
			      <button type="submit" className="btn">subscribe</button>
			    </form>
			  </div>
			</div>
		</div>
	</div>
  );
}

export default Sidebar;