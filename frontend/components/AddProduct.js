"use client";

import { useState } from "react";

export default function AddProduct(){

const [name,setName] = useState("");
const [quantity,setQuantity] = useState("");
const [price,setPrice] = useState("");

const addProduct = async (e)=>{

e.preventDefault();

await fetch("http://localhost:5000/inventory",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
quantity,
price
})
});

setName("");
setQuantity("");
setPrice("");

alert("Product Added");

};

return(

<form onSubmit={addProduct} className="space-y-4">

<h2 className="text-2xl font-bold text-white text-center">
➕ Add New Product
</h2>

<input
className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
placeholder="Quantity"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<input
className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<button
className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
type="submit"
>
Add Product
</button>

</form>

);
}