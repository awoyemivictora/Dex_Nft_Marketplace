import DetailedImg from "../../../assets/img/art-work/detailed.jpg"

const Detailed = () => {

  return (
    <>
      <div className="col-12 col-lg-5">
          <div className="detailed-img">
              <img src={DetailedImg.src} alt="" />
          </div>
      </div>
    </>
  );
}

export default Detailed;