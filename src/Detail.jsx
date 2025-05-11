import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Back from './Back';

const Detail = () => {
   const viewCoffee = useLoaderData();
   // console.log(viewCoffee);
   return (
      <div className='mb-10'>
         <Back />
         <h1 className="text-3xl font-bold mb-6 text-center text-base-content/30">Coffee Details</h1>
         <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 border border-gray-700 rounded-lg bg-base-100 max-w-4xl mx-auto">

            {/* Left side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
               <img
                  src={viewCoffee.photo}
                  alt={viewCoffee.name}
                  className="w-60 h-60 object-contain"
               />
            </div>

            {/* Right side - Details */}
            <div className="w-full md:w-1/2 space-y-2 ">
               <h2 className="text-base-content/80 text-2xl font-bold mb-2">{viewCoffee.name}</h2>
               <p className="text-base-content/80"><span className="font-semibold">Chef:</span> {viewCoffee.chef}</p>
               <p className="text-base-content/70"><span className="font-semibold">Taste:</span> {viewCoffee.taste}</p>
               <p className="text-base-content/60"><span className="font-semibold">Category:</span> {viewCoffee.category}</p>
               <p className="text-base-content/50"><span className="font-semibold">Details:</span> {viewCoffee.details}</p>
               <p className="text-base-content/40"><span className="font-semibold">Price:</span> ${viewCoffee.price}</p>
               <p className="text-base-content/30"><span className="font-semibold ">ID:</span> {viewCoffee._id}</p>
            </div>
         </div>
      </div>

   );
};

export default Detail;