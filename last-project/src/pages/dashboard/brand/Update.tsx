import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../tools/store";
import { brandadd, brandedit } from "../../../tools/slices/brandSlice";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

const Create = () => {
  const {id} = useParams(); 
  const branddata = useAppSelector(p=>p.brand);
  const branduni:any = branddata.find((p:any)=>p.id.toString() === id);

  console.log(branduni);
  
  const [title,setTitle] = useState(!branduni?"":branduni.title);
  const [logo,setLogo] = useState(!branduni?"":branduni.logo);
  const [desc,setDesc] = useState(!branduni?"":branduni.desc);
  const dispatch = useAppDispatch();

  const sendData = (e:React.FormEvent)=>{
        e.preventDefault();
        
        if (!title||!logo||!desc) {
          swal("Please fill input","","warning");
        }else{

          dispatch(brandedit({id:branduni.id,data:[{title,logo,desc}]}));
        }
        
  }
  
  return (
    <div className="container">
      {!branduni?<h1>Loading...</h1>:<div className="flex-column d-flex align-items-center justify-content-center">
        <h1 className="my-5">Edit Brand</h1>
      <div className="col-6">
      <form onSubmit={sendData}>
          <div className="mb-3">
            <label  className="form-label">
              Logo
            </label>
            <input
              type="text"
              className="form-control"
              onChange={e=>setLogo(e.target.value)}
              value={logo}
            />
          
          </div>
        
          <div className="mb-3">
            <label  className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              onChange={e=>setTitle(e.target.value)}
              value={title}
            />
          
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={e=>setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Update
          </button>
        </form>
      </div>
      </div>}
    </div>
  );
};

export default Create;
