function SectionTitle({titleSm , titleLg , text}){
  return(
    <div className="section-heading text-center">
        
        <div className="dream-dots justify-content-center" data-aos="fade-up" data-aos-delay='200'>
            <span>{titleSm}</span>
        </div>
        <h2>{titleLg}</h2>
        <p>{text}</p>
    </div>
  )
}

export default SectionTitle