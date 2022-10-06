import SearchWidgetArea from './SearchWidgetArea'
import DonnotMissWidget from './DonnotMissWidget'
import SubscribeWidget from  './SubscribeWidget'

const SidebarAreaContainer = () => {

  return (
    <>
      <div className="col-12 col-md-3">
          <div className="sidebar-area">

              <SearchWidgetArea />

              <DonnotMissWidget />

              <SubscribeWidget />

          </div>
      </div>
    </>
  );
}

export default SidebarAreaContainer;