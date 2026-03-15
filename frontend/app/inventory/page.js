"use client";

import { useEffect, useState } from "react";
import AddProduct from "../../components/AddProduct";

export default function Inventory() {

const [products,setProducts] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/inventory")
.then(res=>res.json())
.then(data=>setProducts(data));

},[]);

return(

<div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10">

<h1 className="text-4xl font-bold text-white text-center mb-10">
📦 Smart Inventory Dashboard
</h1>

<div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
<AddProduct/>
</div>

<h2 className="text-2xl text-white mt-12 mb-6 text-center">
Product Inventory
</h2>

<div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">

{products.map((p)=>(
<div
key={p.id}
className="bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
>

<h3 className="text-xl font-semibold mb-2">
{p.name}
</h3>

<p className="text-gray-600">
Quantity: <span className="font-semibold">{p.quantity}</span>
</p>

<p className="text-green-600 font-bold text-lg mt-2">
₹ {p.price}
</p>

</div>
))}

</div>

</div>

);

}