import React from "react";
import { useAppDispatch, useAppSelector } from "../../../tools/store";
import { Link } from "react-router-dom";
import { branddelete } from "../../../tools/slices/brandSlice";

const Read = () => {
  const brands = useAppSelector((p: any) => {
  return  p.brand;
  });
  const dispatch  = useAppDispatch();
  return (
    <div className="container">
      <h1 className="my-5">Brands list</h1>
      <Link className="btn btn-dark" to="/dashboard/brand/add">Add brand</Link>
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
              <td><Link to={`/dashboard/brand/update/${item.id}`} className="btn btn-warning">Edit</Link></td>
              <td><button className="btn btn-danger" onClick={()=>{dispatch(branddelete(item.id))}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
