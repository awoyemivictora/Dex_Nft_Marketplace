function InfoComponent({titleSm , titleLg , text}){
  return(
    <div className="section-heading text-center">
        
        <div className="dream-dots justify-content-center" data-aos="fade-up" data-aos-delay='200'>
            <span>{titleSm}</span>
        </div>
        <h2 data-aos="fade-up" data-aos-delay='300'>{titleLg}</h2>
        <p data-aos="fade-up" data-aos-delay='400'>{text}</p>
    </div>
  )
}

export default InfoComponent