import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/componentes/Navbar.css';

//recursos
import logotipo from '../recursos/img/logotipo/ccav.svg';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    
    //javascript de los componentes
    // inicializadores
    componentDidMount() {
        window.onscroll = function(e) {
            // print "false" if direction is down and "true" if up
            if(this.scrollY > 200){
            var elemento = document.getElementsByTagName("nav");
            for(var i = 0; i < elemento.length; i++){
            elemento[i].className = elemento[i].className.replace('navT', '');
            elemento[i].className = " navI";
            
         
            }}else{
                // eslint-disable-next-line
            var elemento = document.getElementsByTagName("nav");
            // eslint-disable-next-line
            for( var i = 0; i < elemento.length; i++){
            elemento[i].className = elemento[i].className.replace('navI', '');
            elemento[i].className = " navT";
            
            
            }
        }
            
          }



          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.tooltipped');
            // eslint-disable-next-line
            var instances = M.Tooltip.init(elems,{position:'top', transitionMovement: 0});
          });

          
        //sidenav init
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            // eslint-disable-next-line
            var instances = M.Sidenav.init(elems, {edge:'right'});        
          });

        //dropdown init
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            // eslint-disable-next-line
            var instances = M.Dropdown.init(elems, {hover:true, alignment:'left', coverTrigger	: false, constrainWidth:false});
          });
          
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            // eslint-disable-next-line
            var instances = M.Collapsible.init(elems);
          });
          document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.slider');
            // eslint-disable-next-line
            let instances = M.Slider.init(elems, { height: 720, indicators: false, duration: 400, interval: 6000 });
        });


        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            // eslint-disable-next-line
            var instances = M.Parallax.init(elems);
          });
    }
    
   
    render(){
        return (
            <div>
                
                <div className='navbar-fixed'>
                    <nav>
                        <div className="nav-wrapper fixed">
                                <Link to="/" className="brand-logo"><img width='50' height='50' src={logotipo} alt='Logotipo ccav'></img></Link>
                                <a href="#a" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">INICIO</Link></li>
                                <li><Link to="/jovenes">JOVENES</Link></li>
                                <li><a className='dropdown-trigger' href='#MEDIA' data-target='dropdown1'>MEDIA</a></li>
                                <li><Link to='/login'>INICIAR SESIÓN</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                
                <ul id="slide-out" className="sidenav">                
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="./jovenes">JOVENES</Link></li>
                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <a href='#4'className="collapsible-header">MEDIA</a>
                                <div className="collapsible-body">
                                    <ul>
                                        
                                        <li><Link to="/vivo">VIVO</Link></li>
                                        <li><Link to="/documentos">DOCUMENTOS</Link></li>
                                        <li><Link to="/predicaciones">PREDICACIONES</Link></li>
                                        <li><Link to="/podcast">PODCAST</Link></li>
                                        <li><Link to="/youtube">YOUTUBE</Link></li>
                                        <li><Link to="/blog">BLOG</Link></li>
                                        <li><Link to="/voluntario">VOLUNTARIO</Link></li>
                                        <li><Link to="/galeria">GALERIA</Link></li>
                                        
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><Link to='/login'>INICIAR SESIÓN</Link></li>
                    <div className='footer-nav'><small><h6>HECHO POR <a href='https://instagram.com/aceroraas'>RAAS</a> CON <i className='material-icons  pink-text tiny'>favorite_border</i> PARA CCAV</h6></small></div>
                </ul>
   
                <ul id='dropdown1' className='dropdown-content'>
                  <li><Link to="/vivo">VIVO</Link></li>
                  <li><Link to="/documentos">DOCUMENTOS</Link></li>
                  <li><Link to="/predicaciones">PREDICACIONES</Link></li>
                  <li><Link to="/podcast">PODCAST</Link></li>
                  <li><Link to="/youtube">YOUTUBE</Link></li>
                  <li><Link to="/blog">BLOG</Link></li>
                  <li><Link to="/voluntario">VOLUNTARIO</Link></li>
                  <li><Link to="/galeria">GALERIA</Link></li>
                </ul>
        
        </div> 
        ); //html del navbar con dropdown y sidenav
    } // cierre del render
} //cierre de la clase

export default Navbar;
