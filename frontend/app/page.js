import Link from "next/link";

export default function Home(){

return(

<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">

<div className="text-center bg-white/20 backdrop-blur-lg p-10 rounded-xl shadow-lg">

<h1 className="text-4xl font-bold text-white mb-6">
🚀 Smart Inventory System
</h1>

<p className="text-white mb-6">
Manage your stock and suppliers efficiently
</p>

<Link
href="/inventory"
className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
>
Open Dashboard
</Link>

</div>

</div>

);

}