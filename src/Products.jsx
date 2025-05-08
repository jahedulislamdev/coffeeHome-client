import React, { useState } from 'react';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Products = () => {
   const loadedProducts = useLoaderData()
   const [products, setProducts] = useState(loadedProducts)
   const handleDelete = (id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffees/${id}`, {
               method: "DELETE"
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                     })
                     const remaining = products.filter(p => p._id !== id)
                     setProducts(remaining);
                  }
               })
               .catch(err => console.error(err))
         }
      })
   }
   console.log(products);
   return (
      <div>
         <div className='grid grid-cols-2 gap-4 container mx-auto'>
            {
               products.map(product => (
                  <div key={product._id} className='border border-gray-700 p-2 md:p-4 bg-gray-600 rounded flex justify-between items-center'>
                     <img className='w-32 md:w-42 object-cover rounded-t-2xl' src={product.photo} alt="" />
                     <div>
                        <h2 className='text-lg font-bold'><span className='font-semibold'>Name: </span>{product.name}</h2>
                        <p className='font-light'><span className='font-semibold text-md'>Chef: </span>{product.chef}</p>
                        <p className='font-light'><span className='font-semibold text-md'>Price: </span>{product.price}</p>
                     </div>
                     <div className='flex flex-col gap-2'>
                        <Link to={`/products_detail/${product._id}`} className='cursor-pointer opacity-60 bg-gray-500 p-3 rounded-lg'><MdRemoveRedEye className='size-5' /></Link>
                        <Link to={`/update_coffee/${product._id}`} className='cursor-pointer opacity-60 bg-yellow-800 p-3 rounded-lg'><MdEdit className='size-5' /></Link>
                        <button onClick={() => handleDelete(product._id)} className='cursor-pointer opacity-60 bg-red-600 p-3 rounded-lg'><MdDelete className='size-5' /></button>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Products;