import React from "react";
import { useAppSelector } from "../../../tools/store";
import { Link } from "react-router-dom";

const Read = () => {
  const brands = useAppSelector((p: any) => {
  return  p.car;
  });

  return (
    <div className="container">
      <h1 className="my-5">Cars list</h1>
      <Link className="btn btn-info" to="/dashboard/car/add">Add car</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((item:any,c:number) => (
            <tr>
              <th scope="row">{c+1}</th>
              <td><img width={100} src={item.photo} alt={item.model} /></td>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>${item.price}</td>
              <td><button className="btn btn-warning">Edit</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
