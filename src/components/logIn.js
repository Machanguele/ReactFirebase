import React, { Component } from 'react';
import { firebase, googleAuth } from '../firebase'


export default class LogIn extends Component {
    state ={
        status:false
    }

    signIn = () =>{
    //    alert('clicked');
    firebase.auth().signInWithPopup(googleAuth);
       

    }

    signOut = () =>{
        firebase.auth().signOut();
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            this.setState({
                status: user ? false: true
            })
        })
    }

    render() {
        return (
            <div color="white">
                {
                    this.state.status ?
                    <button  onClick={ this.signIn }>Entrar</button>
                    :
                    <button  onClick={ this.signOut }>Sair</button>
                }
              
            </div>
        )
    }
}

