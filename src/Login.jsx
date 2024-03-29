import React, {useState} from 'react';

const Login = (props) => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div class="Inscriptions">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form"onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='your email ...' name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='********' name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn"onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
        </div>
        </div>
    );
};

export default Login;