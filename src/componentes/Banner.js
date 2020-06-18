import React, { useState, useEffect } from 'react';
import '../css/componentes/Banner.css';
import firebase from '../firebaseConfig';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';
import { Link } from 'react-router-dom';
import Cargando from './Cargando';


function useObtenerBannerFirebase(ruta) {
    let [bannerFirebase, setBannerFirebase] = useState(null);

    useEffect(() => {
        const buscaRuta = firebase.database().ref('pagina/' + ruta + '/banner');
        buscaRuta.on('value', (respuesta) => {
            setBannerFirebase(respuesta.val());
        });


    }, [setBannerFirebase, ruta]);


    return bannerFirebase;
}



function Banner(props) {

    let banner = useObtenerBannerFirebase(props.ruta);


    return banner === null ?
        (<center><Cargando/></center>)
        : (<>
            <div className="banner">
                <div className="caption center-align">
                    <h1>{banner.titulo}</h1>
                    {banner.btn === true && <Link className='btnBanner pulse' to={banner.btnruta}>{banner.btnTexto}</Link>}
                </div>
                <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt='foto banner' />
            </div>
        </>
        );

}

export default Banner;