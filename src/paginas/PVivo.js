import React from 'react';
import Iframe from 'react-iframe'
import {  Route, Link ,useRouteMatch,useLocation} from 'react-router-dom';
import '../css/PVivo.css';
import firebase from '../firebaseConfig';
import 'firebase/firebase-database';



const frame = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FACERORAAS%2Fvideos%2F3123613837649889";
//const frame = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FACERORAAS%2Fvideos%2F3123393801005226%2F&width=0" width="0" height="0" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>'; 
var interna = 0;
function dbFirebase(callback){
    
    function a(e){
        interna = e; 
    }

    
    console.log('se ejecuto funcion dbFirebase');            
    const referncia = firebase.database().ref('/vivo/canal');
        referncia.on('value', (e)=>{
            let canales =   e.val();
           a({canales});
        });
    
    console.log(interna);
    }



function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function Canales(props){
    let { url, path } = useRouteMatch();
    let query = useQuery();
return <div>
      
             <h4 className='center'>CANALES</h4>
            <div className='row'>
                <div className='col s12'>
                    <div className='row'>
                            
                            <div className="col s12 m2 center">
                            <h6>{props.lista.canales.prueba.nombre.toLocaleUpperCase()}</h6>
                            <Link to={`${url}/prueba?frame=${props.lista.canales.prueba.iframe}&name=${props.lista.canales.prueba.nombre}`}><img src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg" alt="imgPruebas" className="circle responsive-img" /></Link> 
                            </div>

                            <div className="col s12 m2 center">
                            <h6>{props.lista.canales.ccavbna.nombre.toLocaleUpperCase()}</h6>
                            <Link to={`${url}/ccavbna?frame=${props.lista.canales.ccavbna.iframe}&name=${props.lista.canales.ccavbna.nombre}`}><img src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg" alt="imgPruebas" className="circle responsive-img" /></Link>
                            </div>

                            <div className="col s12 m2 center">
                            <h6>CCAV PUERTO</h6>
                            <Link to={`${url}/ccavpto?frame=${frame}&name=CCAV PUERTO`}><img src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg" alt="imgPruebas" className="circle responsive-img" /></Link>
                            </div>
                    </div>
                </div>
                
            </div>
           
            <Route path={`${path}/:canal`}>
                <Canal name={query.get("name")} frame={query.get("frame")}/>
            </Route>
            
        </div>

}

function Canal(props){
    console.log(props);
    
    return  <div>
        <center>
            <h1>CANAL DE {props.name.toLocaleUpperCase()}</h1>
            <h5>en vivo</h5><br/>
            <div className="video-container">
                <Iframe  url={props.frame} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"/>
            </div>
        </center>
        
        </div>
}



function vivo(){
    var a = dbFirebase();
    if (a !== undefined && a !== ""){
        console.log(a);
        
        return  <div>      
        <Canales lista={a}/>      
      </div>


    }else{
            return <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="center">GRANGANDO CANALES</h1>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    <h4 className="center">POR FAVOR ESPERE</h4>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

            </div> 
    }

}
export default vivo;