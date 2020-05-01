import React, { Component } from 'react'; 
import '../css/componentes/Anuncios.css';
import firebase from "../firebaseConfig";
import 'firebase/firebase-database';

console.log('se ejecutaron los import');            

let ruta = Ruta();
let i = 0;
var varios =[];
console.log('se ejecutaron las variables ruta,i,varios');            


function Ruta(){
    console.log('se ejecuto funcion ruta');            
            let a = window.location.pathname, b;
            if(a!=="/"){
            b = a.split("/",3);
    
            if(b.length >= 3){
              return false;
            }else{
              
            b= b[1].toLocaleLowerCase();
            
            return "/"+ b;
              
            }
            
            }else{
              return "/";
            }
           
          
          }

class Anuncios extends Component {
    constructor(props) {
        super(props);
        console.log('se ejecuto el construtor');            
        this.state = {anuncios :  null};
        console.log('se ejecuto el state');            
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.clickSiguienteAnuncio = this.clickSiguienteAnuncio.bind(this);
        this.clickSAnteriorAnuncio = this.clickSAnteriorAnuncio.bind(this);
        this.bannerFirebase= this.bannerFirebase.bind(this);
        this.indice= this.indice.bind(this);
        console.log('se ejecuto this.click en contructor');            
      }
      
      
      indice(e){
        console.log('se ejecuto funcion indice');            
        let a;
        let limite = (varios.length-1);
          if(i>limite){            
            i=0;      
            a = varios[i];
          }else if(i<0){
            i=limite;
            a = varios[i];
          }else{

        if(e){
            
            a = varios[i];
            i++;            
        }else{
            
            a = varios[i];
            i--;
            
        }
        
        
        }
        return a;
      }
      

      bannerFirebase(a){  
        console.log('se ejecuto funcion bannerFirebase');            
        const referncia = firebase.database().ref('/anuncios');
        referncia.on('value', (e)=>{
            if(a === '/'){
                let c = e.val();
                varios=[];
                for (const key in c) {
                       let b = c[key];
                      varios.push({a:key,b});
                }
                console.log('se ejecuto consulta a db');
                this.setState(state=>({anuncios:varios[0]}))
            }else{
                let b = e.child(a).val();
                
                if(b === undefined || b === null){
                    console.log('no hay datos _ anuncios va a romperse');
                }else{
                    a = a.split('/');
                    a = a[1].toLocaleLowerCase();                    
                    
                    this.setState(state => ({anuncios :{a:a,b}}));
                    
                    
                    console.log('se ejecuto base de datos para :'+ a);
                }
            }
        });}
       
       

      clickSiguienteAnuncio() {
        
        console.log('se click derecho');
        this.setState(state =>({anuncios : this.indice(true)}));
        
      }

      clickSAnteriorAnuncio() {
        console.log('se click izquierdo');
      this.setState(state =>({anuncios : this.indice(false)}));
      }
      componentDidUpdate(prevProps, prevState) {
        console.log('se ejecuto funcion componentDidUpdate');
        if(ruta !== '/'){
            document.getElementById('ab1').hidden = true;
            document.getElementById('ab2').hidden = true;
        }
      }
      

      componentDidMount(){
        console.log('se ejecuto funcion componentDidMount');
        this.bannerFirebase(ruta);
        if(this.state.anuncios === null){
            console.log('log en null');
            
        }else{
            console.log('log en render');
        }
     }

    
      render() {
        console.log('se ejecuto funcion render');
        if(this.state.anuncios === null){
            console.log('render null');
            return ( <div className='anuncioComponente white-text cyan darken-1'>
            <center>
                <h2 >No se encontraron anuncios</h2>
            </center>
            
            
        </div>)
        }else{
            console.log('render datos');
                   
        return (
            <div>
            <div className='anuncioComponente white-text cyan darken-1'>
            <center>
                <div className='row'>
                    <div className='col s12 divAnucio'>
                            <div className='row'>
                            <div className='col s3 left'>
                            <a href='#l' id='ab1' onClick={this.clickSAnteriorAnuncio}  className='btnAnuncio'><i className='material-icons aa'>chevron_left</i></a>
                            </div>                                
                            <div className='col s5 '>
                                <h2 className='tituloAnuncio'>Anuncios Semanales</h2>
                            </div>
                                <div className='col s3 right'>
                                <a href='#l' id='ab2'  onClick={this.clickSiguienteAnuncio} className='btnAnuncio'><i className='material-icons aa'>chevron_right</i></a>
                                </div>
                            </div>
                    </div>
                </div>
            <h3>Actividades de la iglesia</h3>
            <h5>CCAV - {this.state.anuncios.a.toUpperCase()}</h5>
            </center>
            
            
        </div>
            <div className='anunciosCalendario'>
            <div className='row'>
                    <div className="col s12 m3">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>LUNES</h2>
                    </div>                            
                    <h6>{this.state.anuncios.b.lunes.titulo}</h6>
                    <p>{this.state.anuncios.b.lunes.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.lunes.hora_inicio} - Termina: {this.state.anuncios.b.lunes.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="#a" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col s12 m3">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>MARTES</h2>
                    </div>
                    <h6>{this.state.anuncios.b.martes.titulo}</h6>
                    <p>{this.state.anuncios.b.martes.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.martes.hora_inicio} - Termina: {this.state.anuncios.b.martes.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="#a" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col s12 m3">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>MIERCOLES</h2>
                    </div>
                    <h6>{this.state.anuncios.b.miercoles.titulo}</h6>
                    <p>{this.state.anuncios.b.miercoles.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.miercoles.hora_inicio} - Termina: {this.state.anuncios.b.miercoles.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="#a" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col s12 m3">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>JUEVES</h2>
                    </div>
                    <h6>{this.state.anuncios.b.jueves.titulo}</h6>
                    <p>{this.state.anuncios.b.jueves.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.jueves.hora_inicio} - Termina: {this.state.anuncios.b.jueves.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="#a" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col s12 m4">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>VIERNES</h2>
                    </div>
                    <h6>{this.state.anuncios.b.viernes.titulo}</h6>
                    <p>{this.state.anuncios.b.viernes.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.viernes.hora_inicio} - Termina: {this.state.anuncios.b.viernes.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="#a" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col s12 m4">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>SABADO</h2>
                    </div>
                    <h6>{this.state.anuncios.b.sabado.titulo}</h6>
                    <p>{this.state.anuncios.b.sabado.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.sabado.hora_inicio} - Termina: {this.state.anuncios.b.sabado.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="#a" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col s12 m4">
                    <div className="card horizontal">
                    <div className="card-stacked">
                    <div className="card-content">
                    <div className='tituloCard'>
                    <h2>DOMINGO</h2>
                    </div>
                    <h6>{this.state.anuncios.b.domingo.titulo}</h6>
                    <p>{this.state.anuncios.b.domingo.info}</p><br/>
                    <code>Inicia: {this.state.anuncios.b.domingo.hora_inicio} - Termina {this.state.anuncios.b.domingo.hora_fin}</code> 
                    </div>
                    <div className="card-action">
                    <a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MjBsb3IxODBzcDM2dDhwOTJuNnI1YjAzNTJfMjAyMDA0MTlUMTMzMDAwWiAwNWxsY29pM2IxMDhicDJiMGs2NnFzdGhrZ0Bn&amp;tmsrc=05llcoi3b108bp2b0k66qsthkg%40group.calendar.google.com&amp;scp=ALL" className='blue-text'><i className='material-icons black-text left'>event</i>Agregar a mi calendario</a>
                    </div>
                    </div>
                    </div>
                    </div>  

            </div>
        </div>
        </div>
        );}
      }
    }

export default Anuncios;