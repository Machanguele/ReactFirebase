import React, { Component } from 'react';
import { firebaseDB} from '../firebase';

class Controlled extends Component {

    state = {
        name: '',
        lastName: ''
        
    }

    handleNameChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleLastNameChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            lastName: event.target.value
        })
    }

        enviar=(event)=>{
            event.preventDefault();
            // console.log(this.state)
            
          
           
                firebaseDB.ref('users').push(this.state)
                alert('Adicionou :'+ this.state.name +' a Lista');
     
               
     

        }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.enviar}>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input 
                            type="text"
                            onChange = {this.handleNameChange}
                            value={this.state.name}

                        />

                    </div>

                    <div className="for_element">
                        <label>Enter lastname</label>
                        <input 
                            type="text"
                            onChange = {this.handleLastNameChange}
                            value={this.state.lastName}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default Controlled;