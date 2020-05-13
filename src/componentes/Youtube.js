import React, { Component } from 'react';
import '../css/componentes/Youtube.css';
import Iframe from 'react-iframe';
import firebase from "../firebaseConfig";
import 'firebase/firebase-database';

class Youtube extends Component{
    constructor(props){
        super(props);
        this.state = {
            url : '',
            estado : false
        }
        console.log(props);
        
    }
cargarYoutubeDeFirebase(ruta){
    if(ruta === "/global"){
        firebase.database().ref('resumenyoutube/')
    }else{
        return new Promise((resolve, reject) => {
            firebase.database().ref('resumenyoutube/'+ruta).once('value',(e)=>{
                resolve(e.val());
            });    
        })
        
        
    }
    
}

componentDidMount() {
    
}

render(){
    return (
        <div>
           <Iframe src="https://www.youtube.com/embed/9L_xJwwTbS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
    );
}
}

export default Youtube;