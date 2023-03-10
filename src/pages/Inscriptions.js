import React,{useState} from 'react';
import Menu from '../Menu';
import Login from '../Login';
import Register from '../Register';

function Inscription(props) {
    const [currentForm,setCurrentForm]=useState("login");
  const toggleForm=(forName)=>{
    setCurrentForm(forName);
  }
    return (
        <div>
            <Menu/>
            {
      currentForm==="login" ?<Login onFormSwitch={toggleForm}/>:<Register/>
    }
        </div>
    );
}

export default Inscription;