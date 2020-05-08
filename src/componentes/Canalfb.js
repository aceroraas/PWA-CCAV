import React from "react";
import Iframe from "react-iframe";
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";
import '../css/componentes/Canalfb.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Canales(props) {  
    let { url, path } = useRouteMatch();
    let query = useQuery();
    let mostrar = [];
    for (const i in props.canales) {
        if (props.canales.hasOwnProperty(i)) {
            mostrar.push(props.canales[i]);
        }
    }
return (
    <div>
        <h4 className="center">CANALES</h4>
        <div className="row">
        <div className="col s12">
            <div className="row">
            {(mostrar|| []).map(e=>
                    <div key={e.id} className='col s12 m2 center'>
                    <h6>{e.nombre.toLocaleUpperCase()}</h6>
                        <Link
                        to={`${url}/prueba?frame=${e.iframe}&name=${e.nombre}`}
                        >
                        <img
                            src={e.logotipo}
                            alt={e.nombre}
                            className='circle responsive-img'
                        />
                        </Link>
                    </div>
                
                )}
        </div>
    </div>
</div>

    <Route path={`${path}/:canal`}>
        <Canal name={query.get("name")} frame={query.get("frame")} />
    </Route>
</div>
);
}

function Canal(props) {
    console.log(props);

return (
    <div>
    <center>
        <h1>CANAL DE {props.name.toLocaleUpperCase()}</h1>
        <h5>en vivo</h5>
        <br />
        <div className="video-container">
        <Iframe
            url={props.frame}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allowFullScreen="true"
        />
        </div>
    </center>
    </div>
);
}

export default Canales;