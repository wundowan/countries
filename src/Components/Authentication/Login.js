import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

const Login = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { email, password };
            
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            console.log(parseRes);
            localStorage.setItem("token", parseRes.jwtToken);
            

            setAuth(true)

            console.log(parseRes);

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)}/>
                <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
                <button className="btn btn-success btn-block" >Submit</button>
            </form> 
            <Link to="/register">Register here</Link>
        </Fragment>
    )
}

export default Login;