import React, { useState, useEffect } from 'react';
import '../css/componentes/Anuncios.css';
import firebase from "../firebaseConfig";
import 'firebase/firebase-database';
import Cargando from './Cargando';

function Anuncios(props) {
  const anuncio = useFirebaseAnuncios(props.ruta);
console.log(anuncio);

  if (anuncio === undefined) {
    return <center><Cargando /></center>
  } else {

    return <>

      <div className='anuncioComponente white-text cyan darken-1'>

        <a href='#l' id='btni' className='btnAnuncio'><i className='material-icons'>chevron_left</i></a>
        <a href='#l' id='btnd' className='btnAnuncio'><i className='material-icons'>chevron_right</i></a>
        <h2>Anuncios Semanales</h2>
        <h3>Actividades de la iglesia</h3>
      </div>
      {(anuncio instanceof Array) ? anuncio.map((e, i) =>
        <div key={i} id={i} className='fondoTarjetas'>
          <center>
            <h5>CCAV - {e.lugar.toUpperCase()}</h5>
          </center>
          {(e.anuncio !== null) ?
            <>

              <div className="tarjeta">
                <h2>LUNES</h2>
                <h6>{e.anuncio.lunes.titulo}</h6>
                <p>{e.anuncio.lunes.info}</p><br />
                <code>Inicia: {e.anuncio.lunes.hora_inicio} <br /> Termina: {e.anuncio.lunes.hora_fin}</code>
              </div>


              <div className="tarjeta">

                <h2>MARTES</h2>
                <h6>{e.anuncio.martes.titulo}</h6>
                <p>{e.anuncio.martes.info}</p><br />
                <code>Inicia: {e.anuncio.martes.hora_inicio} <br /> Termina: {e.anuncio.martes.hora_fin}</code>
              </div>


              <div className="tarjeta">

                <h2>MIERCOLES</h2>
                <h6>{e.anuncio.miercoles.titulo}</h6>
                <p>{e.anuncio.miercoles.info}</p><br />
                <code>Inicia: {e.anuncio.miercoles.hora_inicio} <br /> Termina: {e.anuncio.miercoles.hora_fin}</code>
              </div>


              <div className="tarjeta">

                <h2>JUEVES</h2>
                <h6>{e.anuncio.jueves.titulo}</h6>
                <p>{e.anuncio.jueves.info}</p><br />
                <code>Inicia: {e.anuncio.jueves.hora_inicio} <br /> Termina: {e.anuncio.jueves.hora_fin}</code>
              </div>


              <div className="tarjeta">

                <h2>VIERNES</h2>
                <h6>{e.anuncio.viernes.titulo}</h6>
                <p>{e.anuncio.viernes.info}</p><br />
                <code>Inicia: {e.anuncio.viernes.hora_inicio} <br /> Termina: {e.anuncio.viernes.hora_fin}</code>
              </div>


              <div className="tarjeta">

                <h2>SABADO</h2>
                <h6>{e.anuncio.sabado.titulo}</h6>
                <p>{e.anuncio.sabado.info}</p><br />
                <code>Inicia: {e.anuncio.sabado.hora_inicio} <br /> Termina: {e.anuncio.sabado.hora_fin}</code>
              </div>


              <div className="tarjeta">

                <h2>DOMINGO</h2>
                <h6>{e.anuncio.domingo.titulo}</h6>
                <p>{e.anuncio.domingo.info}</p><br />
                <code>Inicia: {e.anuncio.domingo.hora_inicio} <br /> Termina: {e.anuncio.domingo.hora_fin}</code>
              </div>


              {e.anuncio.especial !== undefined ?
                e.anuncio.especial.aviso === true ?
                  <div className="tarjeta">
                    <h2>ESPECIAL</h2>
                    <h6>{e.anuncio.especial.titulo}</h6>
                    <p>{e.anuncio.especial.info}</p><br />
                    <code>Inicia: {e.anuncio.especial.hora_inicio} <br /> Termina: {e.anuncio.especial.hora_fin}</code>
                  </div>
                  : <div className="tarjeta ">
                    <h2>ESPECIAL</h2>
                    <h6>NO HAY ANUNCIO ESPECIAL</h6>
                  </div>

                :
                <div className="tarjeta ">
                  <h2>ESPECIAL</h2>
                  <h6>NO HAY ANUNCIO ESPECIAL</h6>
                </div>}

            </>
            :
            <div>
              <br />
              <br />
              <center>
                <h2>NO SE HAN CONFIGURADO LOS ANUNCIOS</h2>
              </center>

            </div>}

        </div>


      )
        ://en caso de que no sea un array
        <div>
          <br />
          <br />
          <center>
            <h2>NO SE ENCONTRARON LOS ANUNCIOS</h2>
          </center>

        </div>
      }
    </>
  }

}

export default Anuncios;


function useFirebaseAnuncios(ruta) {
  let [anuncios, setGrupoDeAnuncios] = useState([]);

  useEffect(() => {
    const database = firebase.database();
    const referencia = database;
    const rutaPrincipal = '/pagina/' + ruta + '/anuncios/';
    referencia.ref(rutaPrincipal).once('value').then((e) => {
      if (e.val() !== null) {
        if (e.val().ruta_objeto !== undefined) {
          for (let i = 0; i < e.val().ruta_objeto.length; i++) {
            referencia.ref(e.val().ruta_objeto[i]).once('value').then((ea) => {
              setGrupoDeAnuncios(anuncios => anuncios.concat({ lugar: e.val().ruta_objeto[i].slice(7, -9), anuncio: ea.val() }));
            });
          }
        } else {
          setGrupoDeAnuncios([{ lugar: ruta, anuncio: e.val() }])
        }
      } else {
        console.log('error base de datos, la ruta no se encuentra, devuelve false');
        setGrupoDeAnuncios(false);
      }
    })
  }, [ruta]);




  if (anuncios.length !== 0) { return anuncios };
}

