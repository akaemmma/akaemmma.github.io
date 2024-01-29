import React from "react";
import './Admin.css'
import Sidebar from "../../Component/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Component/AddProduct/AddProduct";

const Admin = () =>{
    return(
        <div className="admin">
            <Sidebar/>
            <Routes>
                <Route path="/addproduct" element={<AddProduct/>}/>
                <Route path="/listproduct" element={<LIstProduct/>}/>
            </Routes>
        </div>
    )
}

export default Admin