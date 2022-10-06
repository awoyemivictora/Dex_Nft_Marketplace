import dynamic from "next/dynamic";
import Breadcumb from '../Breadcumb'
// import FilterSec from '../FilterSec'
import SidebarAreaContainer from '../SidebarArea'
import {ProfileData} from '../../data/data-containers/data-Profile.js'

const FilterSec = dynamic(
  () => {
    return import('../FilterSec');
  },
  { ssr: false }
);

const BlogArea = ({
	ClassCol="col-12 col-sm-6",
	data
}) => {

  return (
	  <div className="row">

	    {data && data.map((item , key) => (
		    <div className={ClassCol} key={key}>
		      <div className="single-blog-area wow fadeInUp" data-wow-delay="0.2s">
		        {/* Post Thumbnail */}
		        <div className="blog_thumbnail">
		          <img src={item.img.src} alt="" />
		        </div>
		        {/* Post Content */}
		        <div className="blog-content">
		          <div className="post-meta">
		            <p>By <a href="#" className="post-author">{item.name}</a> <a href="#">{item.hist}</a> <a href="#" className="post-comments">{item.numCom}</a></p>
		          </div>
		          <a href="index-single-blog.html" className="post-title">
		            <h4>{item.title}</h4>
		          </a>
		          <p>{item.text}</p>
		          <a href="index-single-blog.html" className="btn more-btn mt-15">Read Details</a>
		        </div>
		      </div>
		    </div>
	    ))}

	  </div>
  );
}

export default BlogArea;