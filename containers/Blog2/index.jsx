import Breadcumb from '../../components/Breadcumb'
import Sidebar from '../../components/Sidebar'
import BlogArea from '../../components/BlogArea'
import {dataBlog2 , dataDown} from '../../data/data-containers/data-Blog2.js'

// import '../../assets/css/profile.css'

const Blog2Container = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Blog'
		          title='Blog'
		/>

		<section className="blog-area section-padding-100">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9">
			  			<BlogArea data={dataBlog2}/>
						<div className="row">
							<div className="col-12">
							  <div className="dream-pagination wow fadeInUp" data-wow-delay="0.2s">
							    <nav>
							      <ul className="pagination justify-content-center">
							    	{Array(7).fill().map((_i , key) => (
							    		<li key={key} className="page-item"><a className="page-link" href="#">{key + 1}</a></li>
							    	))}
							      </ul>
							    </nav>
							  </div>
							</div>
						</div>
			  		</div>
					<Sidebar data={dataDown} />
			  	</div>
			</div>
		</section>
    </>
  );
}

export default Blog2Container;