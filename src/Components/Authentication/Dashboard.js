import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({setAuth}) => {

    const [name, setName] = useState("");

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            })

            const parseRes = await response.json();

            console.log(parseRes);

            setName(parseRes.user_name)
            

        } catch (err) {
            console.log(err.message)
        }
    }

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    useEffect(() => {
        getName();
    }, []);

    return (
        <Fragment>
            <h1>Dashboard {name}</h1>
            <button className="btn btn-primary" onClick={e => logout(e)}>Log Out</button>
            <Link className="btn btn-primary" to="/dashboard">To Dashboard</Link>
            <Link className="btn btn-primary" to="/">To Search</Link>

        </Fragment>
    )
}

export default Dashboard;