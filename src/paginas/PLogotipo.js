import React from 'react';
import '../css/PLogotipo.css';

//img locales
import img1 from '../recursos/img/logotipo/FAVICON.png';
import img2 from '../recursos/img/logotipo/FAVICON2.png';
import img3 from '../recursos/img/logotipo/FAVICON3.png';
import img4 from '../recursos/img/logotipo/FAVICON4.png';
import img5 from '../recursos/img/logotipo/FAVICON5.png';
import img6 from '../recursos/img/logotipo/vv.png';
import img7 from '../recursos/img/logotipo/vv2.png';
import img8 from '../recursos/img/logotipo/vv3.png';


function PLogotipo(){
    return (
        <div>
            <center>
                <h2> PROTOTIPOS <a href='./'>CCAV</a> IGLESIA FORMATO PLANO</h2><br/>
                <br/>
                <img src={img1} alt="logo" width="400"/>
                <img src={img1} alt="logo" width="200"/>
                <img src={img1} alt="logo" width="100"/>
                <img src={img1} alt="logo" width="50"/>
                <p>Logotipo basado en original, describe el mundo, el espiritu santo con fuego vivo y iniciales ccav con tipografia Monserrat</p><br/>
                <br/>
                <img src={img2} alt="logo" width="400"/>
                <img src={img2} alt="logo" width="200"/>
                <img src={img2} alt="logo" width="100"/>
                <img src={img2} alt="logo" width="50"/>
                <br/>
                <p>Logotipo basado en original, describe a LATINOAMERICA, el espiritu santo con fuego vivo y iniciales ccav con tipografia Monserrat</p><br/>
                <img src={img3} alt="logo" width="400"/>
                <img src={img3} alt="logo" width="200"/>
                <img src={img3} alt="logo" width="100"/>
                <img src={img3} alt="logo" width="50"/>
                <p>Reducion de inicales ccav a AV refiriendoce a ADORACIÓN VIVA, describe el mundo</p><br/>
                <br/>
                <img src={img4} alt="logo" width="400"/>
                <img src={img4} alt="logo" width="200"/>
                <img src={img4} alt="logo" width="100"/>
                <img src={img4} alt="logo" width="50"/>
                <p>Logotipo descriptivo con tipografia Monserrat, cruz de cristo como referencia a iglesia y circulo como posible isotipo</p><br/>
                <br/>
                <img src={img5} alt="logo" width="400"/>
                <img src={img5} alt="logo" width="200"/>
                <img src={img5} alt="logo" width="100"/>
                <img src={img5} alt="logo" width="50"/>
                <p>Logotipo basado en original, describe a LATINOAMERICA, y cruz de cristo como referencia a iglesia y iniciales ccav con tipografia Monserrat</p><br/>
                <br/>
                <h2> PROTOTIPOS VIDA VERTICAL</h2><br/>
                <br/>
                <img src={img6} alt="logo" width="400"/>
                <img src={img6} alt="logo" width="200"/>
                <img src={img6} alt="logo" width="100"/>
                <img src={img6} alt="logo" width="50"/>
                <img src={img6} alt="logo" width="20"/>
                <p>Logotipo/isotipo con tipografia Monserrat</p><br/>
                <br/>
                <img src={img7} alt="logo" width="400"/>
                <img src={img7} alt="logo" width="200"/>
                <img src={img7} alt="logo" width="100"/>
                <img src={img7} alt="logo" width="50"/>
                <img src={img7} alt="logo" width="20"/>
                <p>Logotipo descriptivo simple y dinamico, con tipografia Monserrat + V diseñada y vectrizada</p><br/>
                <br/>
                <img src={img8} alt="logo" width="400"/>
                <img src={img8} alt="logo" width="200"/>
                <img src={img8} alt="logo" width="100"/>
                <img src={img8} alt="logo" width="50"/>
                <img src={img8} alt="logo" width="20"/>
                <p>Logotipo descriptivo simple en forma de estampado con nombre vida vertical en intaliano en referencia a la nacionalidad de los pastores padres de la ccav</p><br/>
                <br/>
            </center>
        </div>
    );
}
export default PLogotipo;