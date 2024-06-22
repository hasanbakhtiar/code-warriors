import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../tools/store";
import { brandadd } from "../../../tools/slices/brandSlice";
import swal from "sweetalert";
import { caradd } from "../../../tools/slices/carSlice";

const Create = () => {
  const photoRef = useRef<HTMLInputElement>(null);
  const modelRef= useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const [crash,setCrash] = useState<any>(false);
  const dispatch = useAppDispatch();
  const brand = useAppSelector((p:any)=>p.brand)
  const sendData = (e:React.FormEvent)=>{
        e.preventDefault();
        const photo = photoRef.current!.value;
        const model = modelRef.current!.value;
        const price = priceRef.current!.value;
        const year = yearRef.current!.value;
        const brand = brandRef.current!.value;
        const desc = descRef.current!.value;
      if (!photo||!model||!price||!year||!brand||!desc) {
        swal("Please, fill input","","warning")
      }else{

        dispatch(caradd([{photo,model,price,year,brand,desc,crash}]))
      }
        
        
  }
  
  return (
    <div className="container">
      <div className="flex-column d-flex align-items-center justify-content-center">
        <h1 className="my-5">Create Car</h1>
      <div className="col-6">
      <form onSubmit={sendData}>
          <div className="mb-3">
            <label  className="form-label">
              Photo
            </label>
            <input
              type="text"
              className="form-control"
              ref={photoRef}
            />
          
          </div>
        
          <div className="mb-3">
            <label  className="form-label">
              Model
            </label>
            <input
              type="text"
              className="form-control"
              ref={modelRef}
            />
          
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              ref={priceRef}
            />
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Year
            </label>
            <input
              type="number"
              className="form-control"
              ref={yearRef}
            />
          </div>


        

          <div className="mb-3">
            <label  className="form-label">
              Brand
            </label>
            <select className="form-select" aria-label="Default select example" ref={brandRef}>
              {brand.map((item:any)=>(
                <option key={item.id} value={item.title} defaultValue={brand[0].title}>{item.title}</option>

              ))}
            </select>

          </div>



          <div className="mb-3">
            <label  className="form-label">
              Crash
            </label>
            <input
              type="checkbox"
              className="ms-3"
              onChange={(e:any)=>setCrash(e.target.value)}
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
