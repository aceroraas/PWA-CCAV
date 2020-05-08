import React, { Component } from "react";
import "../css/PVivo.css";
import firebase from "../firebaseConfig";
import "firebase/firebase-database";
import Canalfb from '../componentes/Canalfb';
class Vivo extends Component{
    state = {
        estado: false,
        dcanales: {}
    }


    obtenercanalesVivo(){
        return new Promise((resolve, reject) => {
            firebase.database().ref("/vivo/canal").on("value", (e)=> {
                resolve(e.val());
            });    
        })
    }
    componentDidMount() {
        this.obtenercanalesVivo().then((e)=>
        {
        if(e !== undefined && e !== ""){
            this.setState(state =>({
                estado: true, dcanales: e
            }));
            console.log(this.state.dcanales);
            
        }
    });
    }
    
    render(){
        if(this.state.estado === true){
            return (
            <>
                <Canalfb canales={this.state.dcanales}/>
            </>
            );
        }else{

        
        return (
        <div>
            <br /><br /><br /><br /><br /><br /><br />
            <h1 className="center">GRANGANDO CANALES</h1>
            <div className="progress">
            <div className="indeterminate"></div>
            </div>
            <h4 className="center">POR FAVOR ESPERE</h4>
            <br /><br /><br /><br /><br /><br /><br />
        </div>);
        }
    } 
}

export default Vivo;
