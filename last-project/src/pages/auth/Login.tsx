import React, { useRef } from "react";
import swal from "sweetalert";
import supabase from "../../config/connect";
import { useCookies } from "react-cookie";

const adminuser = {
    email:'super@webluna.org',
    password:'super123',
    tokenadmin:"j1n312jn31j"
}

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [cookies, setCookie] = useCookies(['cookie-car','admintoken']);

  const loginSubmited = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.current?.value || !password.current?.value) {
      swal("Please, fill inputs", "", "warning");
    } else {
        if (adminuser.email === email.current?.value && adminuser.password === password.current?.value) {
            setCookie("admintoken",adminuser.tokenadmin);
            window.location.assign('/');
        } else{
        
        const checkLogin = async()=>{
        
            const createCookie = (token:string)=>{
                setCookie("cookie-car",token);
                swal('Login is successfull!','','success');
                setTimeout(() => {
                  window.location.assign('/')
                }, 2000);
            }
            const {data} = await supabase.from('users').select();
         
            const userfiltered = data?.find((p:any)=>{
              return p.email ===email.current?.value;
            })
          if (userfiltered === undefined) {
            swal('Email or password is wrong!','','error')
          }else{
            if (userfiltered.password === password.current?.value ) {
              (createCookie(userfiltered.token), localStorage.setItem('username',userfiltered.fullname))   
            }else{
              swal('Email or password is wrong!','','error')
            }
          }

            
            
        }
        checkLogin();
    }
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-center my-5">Login</h1>
      <div className="col-6">
        <form onSubmit={loginSubmited}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input ref={email} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input ref={password} type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
