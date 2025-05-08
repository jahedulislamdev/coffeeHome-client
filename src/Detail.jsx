import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Detail = () => {
   const viewCoffee = useLoaderData();
   // console.log(viewCoffee);
   const navigate = useNavigate();
   return (
      <div>
         <button onClick={() => navigate(-1)} className='btn'><IoIosArrowBack />Back</button>
         <h1 className="text-3xl font-bold mb-6 text-center text-base-content">Coffee Details</h1>
         <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 border-2 border-base-300 rounded-lg shadow-md bg-gray-800 max-w-4xl mx-auto">

            {/* Left side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
               <img
                  src={viewCoffee.photo}
                  alt={viewCoffee.name}
                  className="w-60 h-60 object-contain"
               />
            </div>

            {/* Right side - Details */}
            <div className="w-full md:w-1/2 space-y-2">
               <h2 className="text-2xl font-bold text-base-content mb-2">{viewCoffee.name}</h2>
               <p className="text-base-content"><span className="font-semibold">Chef:</span> {viewCoffee.chef}</p>
               <p className="text-base-content"><span className="font-semibold">Taste:</span> {viewCoffee.taste}</p>
               <p className="text-base-content"><span className="font-semibold">Category:</span> {viewCoffee.category}</p>
               <p className="text-base-content"><span className="font-semibold">Details:</span> {viewCoffee.details}</p>
               <p className="text-base-content"><span className="font-semibold">Price:</span> ${viewCoffee.price}</p>
               <p className="text-base-content"><span className="font-semibold">ID:</span> {viewCoffee._id}</p>
            </div>
         </div>
         <Footer />
      </div>

   );
};

export default Detail;