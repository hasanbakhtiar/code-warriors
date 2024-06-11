import React from "react";
import { useAppSelector } from "../../../tools/store";
import { Link } from "react-router-dom";

const Read = () => {
  const brands = useAppSelector((p: any) => {
  return  p.brand;
  });

  return (
    <div className="container">
      <h1 className="my-5">Brands list</h1>
      <Link className="btn btn-success" to="/dashboard/brand/add">Add brand</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Logo</th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((item:any,c:number) => (
            <tr>
              <th scope="row">{c+1}</th>
              <td><img width={100} src={item.logo} alt={item.title} /></td>
              <td>{item.title}</td>
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
