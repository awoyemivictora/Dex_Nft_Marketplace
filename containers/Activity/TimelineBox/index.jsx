import ItemTimeline from './ItemTimeline'
import timelineData from '../../../data/data-containers/data-Timeline.json'

const TimelineBox = () => {

  return (
    <>
      <div className="col-12 col-md-9">
          <div className="timelineBox">
              <div className="timelineHeader">
                  <h3>Recent Activity</h3>
                  <span>Business History</span>
              </div>
              <div className="timelineBody">
                  <ul className="timeline">
                      {timelineData && timelineData.map((item , i) => (
                        <ItemTimeline
                          FullTime={item.FullTime}
                          Time={item.Time}
                          title={item.title}
                          text={item.title}
                          addLink={item.title}
                          name={item.title}
                          bid={item.bid}
                        />
                      ))}
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}

export default TimelineBox;