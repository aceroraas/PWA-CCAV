import React, { Component } from 'react';
import '../css/componentes/Footer.css';


class Footer extends Component{

render(){
    return(
        <footer className="page-footer  cyan darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Para Donaciones al Centro Cristiano Adocarion Viva</h5>
                <p className="grey-text text-lighten-4">
                    RIF: J-40211779-5<br/>
                    Banco Banesco | Asociación Civil CCAV <br/>
                    0134 0062 8606 21040 512<br/>
                    Cuenta Corriente</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Enlaces que tal vez te interesen</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="/barcelona">Sede Barcelona</a></li>
                  <li><a className="grey-text text-lighten-3" href="/puerto">Sede Puerto La cruz</a></li>
                  <li><a className="grey-text text-lighten-3" href="/vidaverticalb">Vida Vertical Jovenes Barcelona</a></li>
                  <li><a className="grey-text text-lighten-3" href="/vidaverticalp">Vida Vertical Jovenes Puerto</a></li>
                  <li><a className="grey-text text-lighten-3" href="/media/tipografia">Tipografia de la web</a></li>
                  <li><a className="grey-text text-lighten-3" href="/media/logotipo">Logotipos Prototipos</a></li>
                  <li><a className="grey-text text-lighten-3" href="/equipo/dev">Desarrolladores de la web</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <center><small>HECHO POR <a className='black-text nav-copyright' href='https://instagram.com/aceroraas'>RAAS</a> CON <i className='material-icons  pink-text tiny'>favorite_border</i> PARA CCAV</small></center>
            </div>
          </div>
        </footer>
    )
}

}
export default Footer;