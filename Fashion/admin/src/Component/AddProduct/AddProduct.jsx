import React from "react";
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct =()=>{
    return(
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title </p>
                <input type="text" name="name" placeholder="Type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" name="old-price" placeholder="type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" name="new-price" placeholder="type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select name="category" className="add-product-selection">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={upload_area} className="addproduct-thumnail-img" alt="" />
                </label>
                <input type="file" name="image" id="file-input" hidden />
                <button className="addproduct-btn">ADD</button>
            </div>
        </div>
    )
}

export default AddProduct