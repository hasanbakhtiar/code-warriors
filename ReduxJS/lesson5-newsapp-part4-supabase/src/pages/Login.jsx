import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const superuser = {
    email:"super@gmail.com",
    pass:"super123",
}
const Login = () => {
    const emailRef= useRef();
    const passRef= useRef();
    const navigate = useNavigate();
    const checkForm =e=>{
        e.preventDefault();
        if (emailRef.current.value === superuser.email && passRef.current.value === superuser.pass ) {
            swal("Login is successfully","","success");
            setTimeout(()=>{
                navigate('/dashboard');
            },1500)
        }
    }
    return (
        <div >
            <h1 className='text-center my-5'>Login</h1>
            <div className="d-flex align-items-center justify-content-center">
                <Col sm={5}>
                    <form onSubmit={checkForm}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Col>
            </div>
        </div>
    )
}

export default Login