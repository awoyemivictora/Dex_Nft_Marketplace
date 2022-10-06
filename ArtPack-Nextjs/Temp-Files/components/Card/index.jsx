import Link from 'next/link'

function CardContainer({imgBig , imgSm ,name}){
	return(
        <div className="col-12 col-md-6 col-lg-3">

            <div  className="service_single_content collection-item">
                
                <div className="collection_icon">
                    <img src={imgBig.src} alt="" />
                </div>
                <span className="aut-info">
                    <img src={imgSm.src} width="50" alt="" />
                </span>
                <div className="collection_info text-center">
                    <h6>{name}</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/profile"><a className="more-btn mt-15">Follow</a></Link>
                </div>
                
            </div>
        </div>
	)
}

export default CardContainer