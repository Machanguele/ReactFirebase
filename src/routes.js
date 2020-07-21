import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/Header/header';
import Uncontrolled from './components/uncontrolled';
import Controlled from './components/controlled';
import User from './components/user';
import LogIn from './components/logIn';
import Dashboard from './components/dashboard';
import Teste from './components/teste';
import Tes from './components/teste2';
// const PriveRoute = ({
//     isLogged, component: Comp,
//     ...rest}) =>{
    

//     return <Route {...rest} component={(props)=>(
//         isLogged ?
//             <Comp {...props} />
//         : <Redirect to="/login" />
//     )}>

//             </Route>


// }

const Privado = (props)=>(
    
    props.isLogged ? 
        <Route path="/dash" exact component={Dashboard} />
    :
         <Redirect to="/login" />
       

)

const RPrivado = (props)=>(
    
  <Switch>
        <Route path="/teste" exact component={Teste} />
        <Route path="/teste2" exact component={Tes} />
  </Switch>
        

   
       

)




   


    


const Routes = (props) => {
    // console.log(props)
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/uncontrolled" exact component={Uncontrolled} />
                <Route path="/controlled" exact component={Controlled} />
                <Route path="/user" exact component={User} />
                <Route path="/login" exact component={LogIn} />
                {/* <PriveRoute isLogged={props.auth} path="/dash" exact component = {Dashboard} ></PriveRoute> */}
                {/* <RPrivado isLogged={props.auth}></RPrivado> */}
                <Privado isLogged={props.auth}></Privado> 
                
               
                
                
            </Switch>
           
        </div>
    )
};

export default Routes;