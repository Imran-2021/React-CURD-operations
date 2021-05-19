import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const Home = () => {
    const [users,setUser]= useState([]);

    useEffect(()=>{
        loadUsers();
    },[])
    const loadUsers=async ()=>{
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    }
    return (
        <div className="container mainheight">
        <div className="py-4">
            <h1>Home Page</h1>
            <table class="table border shadow">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th className="ps-4" scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-primary me-2" >view</Link>
                <Link className="btn btn-outline-primary me-2" >Edit</Link>
                <Link className="btn btn-danger" >delete</Link>
            </td>
            </tr>))
    }
  </tbody>
</table>
        </div>
        </div>
    );
};

export default Home;