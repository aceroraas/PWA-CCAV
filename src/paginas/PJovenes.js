import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PJovenes.css';


function Jovenes() {
    return <>
        <div className='fondoJovenes'>
            <div id='bna'>
                <Link to='/jovenes/bna'><img src='https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='jovenes Barcelona' /><h2>VIDA VERTICAL <br /> BARCELONA</h2></Link>
            </div>

            <div id='pto'>
                <Link  to='/jovenes/pto'><img src='https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80' alt='jovenes Puerto' /><h2>VIDA VERTICAL <br /> PUERTO LA CRUZ</h2></Link>
            </div>
        </div>
    </>


}
export default Jovenes;