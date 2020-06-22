import React, { Component } from 'react';
import '../css/componentes/Footer.css';
import { Link } from 'react-router-dom';


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
                  <li><Link className="grey-text text-lighten-3" to="/ccav/bna">Sede Barcelona</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/ccav/pto">Sede Puerto La cruz</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/jovenes/bna">Vida Vertical Jovenes Barcelona</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/jovenes/pto">Vida Vertical Jovenes Puerto</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/nosotros">Sobre Nosotros</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/equipo/dev">Desarrolladores de la web</Link></li>
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