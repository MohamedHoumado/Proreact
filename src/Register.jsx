import React,{useState} from 'react';

const Register = (props) => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div class="Inscriptions">
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form"onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="name" id="name" placeholder="Ful name" name="name"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='your email ...' name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='********' name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn"onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</button>
        </div>
        </div>
    );
};

export default Register;