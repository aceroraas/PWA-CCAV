import React from 'react';
import firebase from '../firebaseConfig';
import 'firebase/firebase-database';
import Banner from './Banner';

function ManejadorB(props){

    

    function bannerFirebase(ruta){
        const referncia = firebase.database().ref('banner'+ruta);
        referncia.on('value', (e)=>{
           let b = retornaArregloDeObjectoBannerFirebase(e.val());
           let valor = actulizarEstadoBanner(b);
          return valor;
        });

    }

    function retornaArregloDeObjectoBannerFirebase(a){
        let c = [], b;
           for (const key in a) {
                    if (a.hasOwnProperty(key)){ b = a[key];
                        for (const k2 in b) {
                            c = c.concat(b[k2]);
                        }
                    }
                }
         return c;
        }
    

    function actulizarEstadoBanner(b){
        
       return b;
    }
    
    
  return(
      <Banner valores={bannerFirebase(props.ruta)} />
  )


}
export default ManejadorB;