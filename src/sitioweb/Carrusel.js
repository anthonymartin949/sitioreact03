import React from 'react'

const Carrusel = () => {
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ibb.co/m0tS3rr/descarga-1.jpg" alt="galeria1" className="img-fluid img-thumbail"/>
                    <div className="carousel-caption d-none d-md-block">
                        
                    </div>
                </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/DfR03hP/images-4.jpg" alt="galeria2" className="img-fluid img-thumbail"/>
                <div className="carousel-caption d-none d-md-block">
                    
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/C2qs8Y3/images-3.jpg" alt="galeria3" className="img-fluid img-thumbail"/>
                <div className="carousel-caption d-none d-md-block">
                    
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        <br/>
        Hoy en día, las computadoras son herramientas importantes para procesar información, y sirven como instrumento de comunicación entre las personas. La computación es una herramienta tecnológica que hoy en día ha revolucionado al mundo de una manera extraordinaria.
    </div>
   
        
    )
}
export default Carrusel