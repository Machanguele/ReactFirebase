import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

const App = () =>{
    
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

// ReactDOM.render(<App  {user}/>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App auth= {user}/>, document.getElementById('root'));
})
