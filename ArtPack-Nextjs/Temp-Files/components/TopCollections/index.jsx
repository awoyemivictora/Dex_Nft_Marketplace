import TopCollectionsItem from '../TopCollectionsItem'
import InfoComponent from '../InfoComponent'
import {TopCollectionsData} from '../../data/data-components/data-TopCollections.js'
// import TopCollectionsData from './data.json'

function TopCollectionsContainer(){

  return(
    <section className="section-padding-100 clearfix" >
        <div className="container">
            <InfoComponent
              titleSm='Our Top Collections'
              titleLg='Popular Collections'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            />
            <div className="row">
              {TopCollectionsData && TopCollectionsData.map((item , i) => (
                <TopCollectionsItem
                  key={i}
                  img={item.img.src}
                  title={item.title}
                  text={item.text}
                  Delay={item.Delay}
                />
              ))}
            </div>
        </div>
    </section>
  )
}

export default TopCollectionsContainer