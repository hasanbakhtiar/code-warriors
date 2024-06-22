import React, { useRef } from "react";
import { useAppDispatch } from "../../../tools/store";
import { brandadd } from "../../../tools/slices/brandSlice";
import swal from "sweetalert";

const Create = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const sendData = (e:React.FormEvent)=>{
        e.preventDefault();
        const title = titleRef.current!.value;
        const logo = logoRef.current!.value;
        const desc = descRef.current!.value;
        if (!title||!logo||!desc) {
          swal("Please fill input","","warning");
        }else{

          dispatch(brandadd([{title,logo,desc}]));
        }
        
  }
  
  return (
    <div className="container">
      <div className="flex-column d-flex align-items-center justify-content-center">
        <h1 className="my-5">Create Brand</h1>
      <div className="col-6">
      <form onSubmit={sendData}>
          <div className="mb-3">
            <label  className="form-label">
              Logo
            </label>
            <input
              type="text"
              className="form-control"
              ref={logoRef}
            />
          
          </div>
        
          <div className="mb-3">
            <label  className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              ref={titleRef}
            />
          
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              ref={descRef}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Create
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Create;
