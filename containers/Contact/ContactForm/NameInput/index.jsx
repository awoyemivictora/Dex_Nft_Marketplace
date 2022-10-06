function NameInput({Class , delay , name , title}){
	return(
        <div className={Class}>
            <div className="group" data-aos-delay={delay} data-aos="fade-up">
                <input type="text" name={name} id="name" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{title}</label>
            </div>
        </div>
	)
}

export default NameInput