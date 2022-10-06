import Link from 'next/link'

function ItemTimeline({FullTime , Time , title , text , addLink=false , name='' , bid=""}){
  return(
      <li>
          <div className="timelineDot"></div>
          <div className="timelineDate">
              <p><i className="fa fa-calendar mr-5p"></i>{FullTime}</p>
              <p><i className="fa fa-clock-o mr-5p"></i>{Time} AM</p>
          </div>
          <div className="timelineWork">
              <h6>{title}</h6>
              <span>{text} {addLink && <Link href="/profile">{name}</Link>} {bid !== '' ? 'for' + <span className="w-text">{bid} ETH Each</span> : ''} </span>
          </div>
      </li>
  )
}

export default ItemTimeline