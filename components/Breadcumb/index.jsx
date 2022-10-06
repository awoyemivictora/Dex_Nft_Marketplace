import React from "react"

// import './breadcumb.css'

function BreadcumbContainer({namePage , title , animNone=true , addFade=true , addOther=false}){

  return(
      <div className="breadcumb-area clearfix">
          <div className="breadcumb-content">
              <div className="container h-100">
                  <div className="row h-100 align-items-center">
                      <div className="col-12">
                          <nav aria-label="breadcrumb" data-aos={`${animNone && addFade ? 'fade-up' : '' }`} className="breadcumb--con text-center">
                              <h2 className="title wow fadeInUp">{namePage}</h2>
                              <ol className="breadcrumb justify-content-center">
                                  <li className="breadcrumb-item"><a>Home</a></li>
                                  <li className="breadcrumb-item" aria-current="page">{title}</li>
                                  {addOther && <li className="breadcrumb-item active" aria-current="page">{addOther}</li>}
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default BreadcumbContainer