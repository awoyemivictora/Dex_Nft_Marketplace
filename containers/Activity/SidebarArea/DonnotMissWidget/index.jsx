import {FilterData} from '../../../../data/data-containers/Sidebar-data.js'
// import FilterData from './data.json'
const DonnotMissWidget = () => {

  return (
    <>
      <div className="donnot-miss-widget mb-50">
          <div className="widget-title">
              <h5>Filters</h5>
          </div>
          <div className="filers-list">
              {FilterData && FilterData.map((item , i) => (
                <button key={i} className="filter-item">
                    <img src={item.img} alt="" />{item.text}
                </button>                                    
              ))}
          </div>
      </div>
    </>
  );
}

export default DonnotMissWidget;