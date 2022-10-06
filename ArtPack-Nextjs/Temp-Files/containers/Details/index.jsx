import Breadcumb from '../../components/Breadcumb'
import Sidebar from '../../components/Sidebar'
import BlogArea from '../../components/BlogArea'
import {dataBlog2 , dataDown} from '../../data/data-containers/data-Details'

import {
	DetailsBlogImg2,
	DetailsBestImg1,
	DetailsBestImg2,
	DetailsBestImg3
} from "../../utils/allImgs"

// import '../../assets/css/profile.css'

const DetailsContainer = () => {

  return (
    <>
		<Breadcumb  
		          namePage='Blog Details'
		          title='Blog'
		          addOther="Blog Details"
		/>

		<section className="blog-area section-padding-100">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9">
						<div className="col-12 col-md-12">
							<div className="single-blog-area wow fadeInUp" data-wow-delay="0.2s">
							  {/* Post Thumbnail */}
							  <div className="blog_thumbnail">
							    <img src={DetailsBlogImg2.src} alt="" />
							  </div>
							  {/* Post Content */}
							  <div className="blog-content">
							    <div className="post-meta">
							      <p>By <a href="#" className="post-author">Nazrul</a> <a href="#">Apr 10, 2021</a> <a href="#" className="post-comments">7 comments</a></p>
							    </div>
							    <h4 className="post-title">Creative NFTs Marketplace for All Digital Asset Needs.</h4>
							    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptas tempora inventore minima consectetur fugit deserunt neque modi, culpa atque fugiat unde amet quidem, at corrupti dignissimos repudiandae, totam sapiente.</p>
							    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita fugit eum doloribus iste voluptatum perferendis dolorem qui! Vel magnam provident, laudantium voluptates sit, sint iure sunt harum distinctio ab, aliquam est voluptas minus id explicabo illum odio? Officia omnis minima similique, eveniet eos. Rem itaque laboriosam quas est omnis, mollitia possimus eveniet. Veritatis nihil, aliquid quisquam, laborum quis ut rem repellendus animi repellat, alias suscipit nostrum incidunt. Quis, quas.</p>
							    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque necessitatibus laborum eveniet eaque laboriosam in officia reprehenderit quas itaque numquam sit ipsum libero consequuntur quia non quod esse rem corporis vero, consequatur nam, labore. Assumenda dolores possimus voluptatem deleniti, ipsa doloribus voluptatibus adipisci, ex voluptatum doloremque perspiciatis sunt. A earum natus quisquam deserunt nulla saepe, cumque, distinctio fuga animi dignissimos. Fuga, autem. Rem eveniet animi repellendus voluptatibus officiis sit cum doloremque dolorem labore maxime, ipsa cumque deleniti distinctio tempora vitae eos debitis. Voluptatum enim in ab facilis sapiente, quidem numquam, maxime ex veritatis assumenda, accusamus similique.</p>
							    <blockquote>
							      <h5>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero excepturi repellendus quae ipsum. Cum totam cumque quis eveniet saepe nisi.</h5>
							      <span>- Smith, CEO RaReable Marketplace</span>
							    </blockquote>
							    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi earum dolores sed pariatur molestias, aliquid eligendi, non consequatur quisquam repudiandae debitis numquam? Eligendi nostrum laborum, labore minima quaerat at eius tempora quos numquam dolores cum cupiditate voluptates necessitatibus, quis esse, ea. Tempora excepturi quia magnam itaque consequuntur iusto, dolore, nulla omnis, doloremque magni, amet pariatur! Maxime libero temporibus, soluta, qui veniam laudantium cupiditate corporis similique! Consectetur rerum, fuga! Quia nam fuga magnam quas aliquam in, saepe beatae. Culpa soluta, rerum id ex voluptate veniam maxime odit ad modi odio, molestiae est deserunt assumenda voluptatibus fuga accusamus placeat a quam!</p>
							    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur commodi expedita accusantium sapiente culpa rem vel voluptas soluta error adipisci doloremque corporis inventore molestias architecto, iusto tempora rerum. Molestias tempora possimus ea, cumque culpa corrupti dolor harum, alias, voluptatem at ex laborum excepturi iusto asperiores optio suscipit consectetur quis quos dolorum deleniti dicta aut similique, eius fuga. Rem natus deserunt, harum? Quasi, fuga, culpa.</p>
							  </div>
							</div>
							{/* Comment Area Start */}
							<div className="comment_area clearfix mt-70 wow fadeInUp" data-wow-delay="0.4s">
							  <h5 className="title">Comments</h5>
							  <ol>
							    {/* Single Comment Area */}
							    <li className="single_comment_area">
							      {/* Comment Content */}
							      <div className="comment-content d-flex">
							        {/* Comment Author */}
							        <div className="comment-author">
							          <img src={DetailsBestImg1.src} alt="author" />
							        </div>
							        {/* Comment Meta */}
							        <div className="comment-meta">
							          <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
							          <a href="#" className="post-date">April 14</a>
							          <p><a href="#" className="post-author">Lim Sarah</a></p>
							          <a href="#" className="comment-reply">Reply</a>
							        </div>
							      </div>
							      <ol className="children">
							        <li className="single_comment_area">
							          {/* Comment Content */}
							          <div className="comment-content d-flex">
							            {/* Comment Author */}
							            <div className="comment-author">
							              <img src={DetailsBestImg2.src} alt="author" />
							            </div>
							            {/* Comment Meta */}
							            <div className="comment-meta">
							              <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
							              <a href="#" className="post-date">April 14</a>
							              <p><a href="#" className="post-author">Lim Sarah</a></p>
							              <a href="#" className="comment-reply">Reply</a>
							            </div>
							          </div>
							        </li>
							      </ol>
							    </li>
							    {/* Single Comment Area */}
							    <li className="single_comment_area">
							      {/* Comment Content */}
							      <div className="comment-content d-flex">
							        {/* Comment Author */}
							        <div className="comment-author">
							          <img src={DetailsBestImg3.src} alt="author" />
							        </div>
							        {/* Comment Meta */}
							        <div className="comment-meta">
							          <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
							          <a href="#" className="post-date">April 14</a>
							          <p><a href="#" className="post-author">Lim Sarah</a></p>
							          <a href="#" className="comment-reply">Reply</a>
							        </div>
							      </div>
							    </li>
							  </ol>
							</div>
							<div className="post-a-comment-area mt-100 wow fadeInUp" data-wow-delay="0.6s">
						  <h5>Leave a reply</h5>
						  {/* Reply Form */}
						  <form action="#" method="post">
						    <div className="row">
						      <div className="col-12 col-md-6">
						        <div className="group">
						          <input type="text" name="name" id="name" required />
						          <span className="bar" />
						          <label>Name</label>
						        </div>
						      </div>
						      <div className="col-12 col-md-6">
						        <div className="group">
						          <input type="text" name="email" id="email" required />
						          <span className="bar" />
						          <label>Email</label>
						        </div>
						      </div>
						      <div className="col-12">
						        <div className="group">
						          <input type="text" name="subject" id="subject" required />
						          <span className="bar" />
						          <label>Subject</label>
						        </div>
						      </div>
						      <div className="col-12">
						        <div className="group">
						          <textarea name="message" id="message" required defaultValue={""} />
						          <span className="bar" />
						          <label>Comment</label>
						        </div>
						      </div>
						      <div className="col-12">
						        <button type="submit" className="btn more-btn">Reply</button>
						      </div>
						    </div>
						  </form>
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

export default DetailsContainer;