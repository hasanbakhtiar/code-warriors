import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../tools/store";
import { brandadd } from "../../../tools/slices/brandSlice";
import swal from "sweetalert";
import { caradd, caredit } from "../../../tools/slices/carSlice";
import { useParams } from "react-router-dom";

const Create = () => {
  const { id } = useParams();
  const cardata: any = useAppSelector((p) => p.car);
  const caruni: any = cardata.find((p: any) => p.id.toString() === id);
  const [photo, setPhoto] = useState(!caruni ? "" : caruni.photo);
  const [model, setModel] = useState(!caruni ? "" : caruni.model);
  const [price, setPrice] = useState(!caruni ? "" : caruni.price);
  const [year, setYear] = useState(!caruni ? "" : caruni.year);
  const [brand, setBrand] = useState(!caruni ? "" : caruni.brand);
  const [desc, setDesc] = useState(!caruni ? "" : caruni.desc);
  const [crash, setCrash] = useState<any>(!caruni ? "" : caruni.crash);
  const dispatch = useAppDispatch();
  const branddata = useAppSelector((p: any) => p.brand);
  const sendData = (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo || !model || !price || !year || !branddata || !desc) {
      swal("Please, fill input", "", "warning");
    } else {
      dispatch(
        caredit({
          id: caruni.id,
          data: [{ photo, model, price, year, brand, desc, crash }],
        })
      );
    }
  };

  return (
    <div className="container">
      <div className="flex-column d-flex align-items-center justify-content-center">
        <h1 className="my-5">Create Car</h1>
        <div className="col-6">
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label className="form-label">Photo</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPhoto(e.target.value)}
                value={photo}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Model</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setModel(e.target.value)}
                value={model}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Year</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Brand</label>
              <select
                className="form-select"
                onChange={(e) => setBrand(e.target.value)}
              >
                {branddata.map((item: any) => (
                  <option key={item.id} value={item.title} defaultValue={brand}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Crash</label>
              <input
                type="checkbox"
                className="ms-3"
                checked={crash?"checked":""}
                onChange={(e: any) => setCrash(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
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
