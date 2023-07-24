import React, { useState } from "react";
import "./InputForm.css";
const InputForm = (props) => {
	const submitHandler = (e) => {
		let obj = { productId: prodId, sellingPrice: sellingPrice, ProductName: productName, category: category };
		console.log(obj);
		e.preventDefault();
	};
	const [prodId, setProdId] = useState("");
	const [sellingPrice, setSellingPrice] = useState("");
	const [productName, setProductName] = useState("");
	const [category, setCategory] = useState("");

	const IdHandler = (e) => {
		setProdId(e.target.value);
	};
	const sellingPriceHandler = (e) => {
		setSellingPrice(e.target.value);
	};
	const productNameHandler = (e) => {
		setProductName(e.target.value);
	};
	const categoryHandler = (e) => {
		setCategory(e.target.value);
	};

	return (
		<React.Fragment>
			<h2 style={{ textAlign: "center" }}>InputForm</h2>
			<form className="form-control">
				<div>
					<label>Product Id</label>
					<input type="number" onChange={IdHandler} value={prodId}></input>
				</div>
				<div>
					<label>Selling Price</label>
					<input type="number" onChange={sellingPriceHandler} value={sellingPrice}></input>
				</div>

				<div>
					<label>Product Name</label>
					<input type="text" onChange={productNameHandler} value={productName}></input>
				</div>
				<div>
					<select  onChange={categoryHandler} defaultValue="SkinCare">
						<option value="SkinCare" >SkinCare</option>
						<option value="Electronics">Electronics</option>
						<option value="Food">Food</option>
					</select>
				</div>
				<button onClick={submitHandler}>Add Product</button>
			</form>
		</React.Fragment>
	);
};

export default InputForm;
