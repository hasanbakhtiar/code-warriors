import React, { useState } from 'react'
const useraccess = {
    email: 'a@a',
    password: "a1"
}
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [alert, setAlert] = useState({
        style: "",
        value: ""
    });

    const submitHandle = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setAlert({
                style: "warning",
                value: "Please, fill input!"
            })
        }else{
            if (email === useraccess.email && password === useraccess.password) {
                setAlert({
                    style: "success",
                    value: "Login is successfully!"
                })
            }else{
                setAlert({
                    style: "danger",
                    value: "Email or password is wrong!"
                })
            }
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Login</h1>
            <div className="d-flex align-items-center justify-content-center flex-column ">
                <div className="col-6">
                    <h5 className={`alert alert-${alert.style} text-center`}>{alert.value}</h5>
                    <form onSubmit={submitHandle}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login