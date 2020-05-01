import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/componentes/Banner.css';
import firebase from '../firebaseConfig';
import 'firebase/firebase-database';
// esta funcion la usare hasta nuevo aviso, solo se encarga de corregir un error personal
function b64(img){
    var b64;
    function convertb64(src,callback){
        var xhttp = new XMLHttpRequest();
        xhttp.onload = () => {
            var fileReader = new FileReader();
            fileReader.onload = () =>{
                callback(fileReader.result);
            };
            fileReader.readAsDataURL(xhttp.response);
        };
        xhttp.responseType = 'blob';
        xhttp.open('GET',src,true);
        xhttp.send();
    }
    convertb64(img,(e)=>{
        b64=e;
    });
    return b64;
}


class Banner extends Component {
    state ={
            banner:
             [
                Object,
                Object
            ] 
    }
    
    


    retornaArregloDeObjectoBannerFirebase(a) {
        let c = [];
        
        if(a!==null){
        for (let i = 0; i <a.length; i++) {
             c = c.concat(a[i]);
            }
        }else{
            c = [
                {
                    btn: true,
                    titulo: "OYE, NO LO HEMOS ENCONTRADO",
                    btnruta: "/",
                    btnTexto: "IR A CASA",
                    img:"https://cdn.pixabay.com/photo/2015/07/15/11/52/map-846083_960_720.jpg"
                },
                {
                    btn: true,
                    titulo: "CREO QUE TE HAZ PERDIDO",
                    btnruta: "/",
                    btnTexto: "IR A CASA",
                    img:"https://cdn.pixabay.com/photo/2015/07/15/11/52/map-846083_960_720.jpg"
                }
            ];
        }
        return c;       
    
    }
    bannerFirebase(ruta){
        
        const referncia = firebase.database().ref('banner'+ruta);
        referncia.on('value', (e)=>{
           let b = this.retornaArregloDeObjectoBannerFirebase(e.val());
          this.actulizarEstadoBanner(b);
          
        });

    }

    actulizarEstadoBanner(b){
       this.setState({banner: b});
  
          
    }
    
    componentDidMount() {
       
      
      
        this.bannerFirebase(this.props.ruta);

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            // eslint-disable-next-line
            var instances = M.Slider.init(elems, {height:720,indicators:false,duration:400,interval:6000});
          });
      
    }
    

    render(){
        
            return (
                <div className="slider">
                <ul className="slides">
                  { (this.state.banner||[]).map((e,i) =>
                                <li key={i} >
                                <img src={b64(e.img)} style={{backgroundImage: 'url(' + e.img + ')'}} alt='foto banner'/>
                                <div className="caption center-align">
                                <h1>{e.titulo}</h1> 
                                {e.btn === true && <a className='btnBanner pulse' href={e.btnruta}>{e.btnTexto}</a>}
                                </div>
                                </li>
                                
                            )
                            }
                            
                            </ul>
                                </div>
        );       
        
 }


    
}

export default Banner;