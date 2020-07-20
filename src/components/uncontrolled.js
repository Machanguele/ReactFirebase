import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }

    handleSubmit = (event)=>{
        event.preventDefault();
        
        const values = {
            name:this.name.value,
            lastName: this.lastName.value
        }
        console.log(values)
    }

    render(){
        
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input 
                            type="text"
                            ref={input=>this.name=input}

                        />

                    </div>

                    <div className="for_element">
                        <label>Enter lastname</label>
                        <input 
                            type="text"
                            ref={input=>this.lastName=input}
                            
                        />
                    </div>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;