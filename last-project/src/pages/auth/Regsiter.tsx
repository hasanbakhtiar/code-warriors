import { useRef } from "react";
    
import supabase from "../../config/connect";
import swal from "sweetalert";

const Register = () => {
    // form data of validation start
    const fullname = useRef<HTMLInputElement>(null);
    const birthday = useRef<HTMLInputElement>(null);
    const tel = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirePassword = useRef<HTMLInputElement>(null);
    // form data of validation end

    
    const registerSubmited = (e:React.FormEvent)=>{
        e.preventDefault();
        if (
            !fullname.current?.value ||
            !birthday.current?.value ||
            !tel.current?.value ||
            !email.current?.value ||
            !password.current?.value ||
            !confirePassword.current?.value 
            
        ) {
        swal('Please, fill inputs','','warning');
        }else{
          const createdUser = async()=>{
            const {error} = await supabase.from('users').insert({
                fullname:fullname.current?.value,
                birthday:birthday.current?.value,
                tel:tel.current?.value,
                email:email.current?.value,
                password:password.current?.value,
                token: crypto.randomUUID()
            })
            if (error) {
                swal('Something went wrong!',"","error");
                console.log(error);
                
            }else{
                swal('New account has been created!','','success');
                setTimeout(()=>{
                    window.location.assign('/login')
                },2000);
            }
        }
            const sendDataToDb = async()=>{
                if (password.current?.value !== confirePassword.current?.value ) {
                    swal("Password is not equal!","","error");
                }else{
                  
                    const {data} = await supabase.from('users').select();
                    data?.length ===0 ? createdUser() : data?.find(p=>p.email === email.current?.value) ? swal('This email is already registered!',"","error") : createdUser()
                }
            }
            sendDataToDb();

        }
        
    
        
        

    
    }

    return (
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center my-5">Register</h1>
        <div className="col-6">
          <form onSubmit={registerSubmited}>
          <div className="mb-3">
              <label className="form-label">Full name</label>
              <input ref={fullname} type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of birth</label>
              <input ref={birthday} type="date" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Tel</label>
              <input ref={tel} type="tel" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input ref={email} type="email" className="form-control" />
            </div>

            <hr className="text-primary" />
            
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input ref={password} type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input ref={confirePassword} type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  