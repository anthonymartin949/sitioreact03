import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03componenteConCss from './components/C03compCss';
import EjemploDeEstado from './components/C04estado';
import EjemploDeDobleEstado from './components/C05dobleestado';
import ComponenteConVariable from './components/C06variable';
import OperadorTernario from './components/C07operador';
import Matriz from './components/C08matriz';
function App() {
  return (
   <div className="container">
      <header className="row bg-secondary">
        <img src="https://i.ibb.co/BggXGM0/header.jpg" alt="header" className="img-fluid img-thumbail"/>
      </header>

      <nav className="row bg-primary">
        <div className="container-block">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-8 my-sm-0" type="submit">Search</button>
              </form>
          </nav>			  
        </div>
      </nav>

      <section className="row bg-primary">
        <aside className="col-md-6 bg-warning ps-4">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src="https://i.ibb.co/25dLwvK/galeria1.jpg" alt="galeria1" className="img-fluid img-thumbail"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
              </div>
              <div className="carousel-item">
              <img src="https://i.ibb.co/2Y4FPRq/galeria2.jpg" alt="galeria2" className="img-fluid img-thumbail"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
              </div>
              <div className="carousel-item">
              <img src="https://i.ibb.co/PwfZKzs/galeria3.jpg" alt="galeria3" className="img-fluid img-thumbail"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
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
          </div>
            <br/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam tempora qui illo possimus suscipit exercitationem laudantium eligendi quibusdam, tempore non. Officia, dignissimos velit. Magni nemo possimus, corporis placeat rem hic.
        </aside>  
      
        <article className="col-md-3 bg-secondary"> 
			    <div className="card" > 
				    <img src="https://i.ibb.co/X2NHLnW/colibri.jpg" alt="Colibri" className="img-fluid img-thumbail"/>
				      <div className="card-body">
				      <h5 className="card-title">Card title</h5>
				      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				      <a href="#" className="btn btn-primary">Go somewhere</a>
				      </div>
			    </div>
		    </article>
      
        <article className="col-md-3 bg-info">
          <h1 class="border-top my-1"></h1>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
          <h1 class="border-top my-1"></h1>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
          <h1 class="border-top my-1"></h1>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Recipient:</label>
                      <input type="text" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>    
          <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
          <h1 class="border-top my-1"></h1>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
              <ul class="list-unstyled ps-0">
						<li class="mb-1">
							<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
							Home
							</button>
							<div class="collapse show" id="home-collapse">
							<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li><a href="#" class="link-dark rounded">Overview</a></li>
								<li><a href="#" class="link-dark rounded">Updates</a></li>
								<li><a href="#" class="link-dark rounded">Reports</a></li>
							</ul>
							</div>
						</li>
						<li class="mb-1">
							<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
							Dashboard
							</button>
							<div class="collapse" id="dashboard-collapse">
							<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li><a href="#" class="link-dark rounded">Overview</a></li>
								<li><a href="#" class="link-dark rounded">Weekly</a></li>
								<li><a href="#" class="link-dark rounded">Monthly</a></li>
								<li><a href="#" class="link-dark rounded">Annually</a></li>
							</ul>
							</div>
						</li>
						<li class="mb-1">
							<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
							Orders
							</button>
							<div class="collapse" id="orders-collapse">
							<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li><a href="#" class="link-dark rounded">New</a></li>
								<li><a href="#" class="link-dark rounded">Processed</a></li>
								<li><a href="#" class="link-dark rounded">Shipped</a></li>
								<li><a href="#" class="link-dark rounded">Returned</a></li>
							</ul>
							</div>
						</li>
						<li class="border-top my-3"></li>
						<li class="mb-1">
							<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
							Account
							</button>
							<div class="collapse" id="account-collapse">
							<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li><a href="#" class="link-dark rounded">New...</a></li>
								<li><a href="#" class="link-dark rounded">Profile</a></li>
								<li><a href="#" class="link-dark rounded">Settings</a></li>
								<li><a href="#" class="link-dark rounded">Sign out</a></li>
							</ul>
							</div>
						</li>
						</ul>
              </div>
            </div>
        </article>

        <article className="col-md-5 bg-danger py-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7331251795354!2d-71.55089728554384!3d-16.38755174218781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses-419!2spe!4v1626907138622!5m2!1ses-419!2spe" width="450" height="450" style={{border:'10', color:'black'}} allowfullscreen="" loading="lazy"></iframe>
        <h1 className="text-light center">INSTITUTO DE EDUCACIÓN SUPERIOR HONORIO DELGADO ESPINOZA</h1>
        <h2 className="text-info center">Calle los Arces 202, Arequipa 04017</h2>
        </article>
      
        <article className="col-md-7 bg-success py-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xNpo_hfA-aY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="470" allowfullscreen></iframe>
        <h1 align="center" class="text-light" >HIMNO</h1>
        <p align="center" class="text-light">
          Adelante la patria soñada

          Estudiando se hará realidad

          con Honorio Delgado Espinoza

          mantengamos muy alto el deber

          Instituto que hoy llevas el nombre

          de tan noble y perenne Doctor

          que el honor, disciplina y estudio

          nos legó como ejemplo de amor.

          Digno centro de gratos recuerdos

          nueva honrada y estrella del sur

          hoy nos brindas la tecnología

          y la ciencia de la educación

          cual orfebres de torno y de fresa

          modelemos con fe la amistad

          conservando el abrazo fraterno

          siempre hermanos nos une el Perú.

          Te ofrecemos nuestras juventudes

          con promesas de un buen porvenir

          hoy renacen nuevas ilusiones

          nuevas ansias de obrar que aprender

          construyamos nobles ideales

          corazones de temple y moral

          tus talleres hoy forjan la historia

          fuente eterna de ciencia y saber. </p>
        </article>
        
        <footer class="row bg-dark text-light ps-5" align="center">
		    <h1> ESTE ES EL FIN DE MI PÁGINA</h1>
	      </footer>
      
      </section>
      
   </div>

  );
}

export default App;