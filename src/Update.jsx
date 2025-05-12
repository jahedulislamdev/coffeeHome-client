import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
   const updateCoffee = useLoaderData();
   const navigate = useNavigate();


   const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const price = form.price.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;

      const coffeeData = {
         name, chef, price, taste, category, details, photo
      };

      console.log(coffeeData);
      // post data to the server
      fetch(`http://localhost:5000/coffees/${updateCoffee._id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(coffeeData)
      }).then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               alert('Updated Successfully')
               navigate('/')
            }
            console.log(data);
         }
         ).catch(err => console.error(err));
   }
   return (
      <div className="min-h-screen bg-base-100 ">
         {/* Back button */}
         <div className="max-w-4xl mx-auto my-6">
            <button
               onClick={() => navigate(-1)}
               className="flex items-center gap-2 text-base-content hover:text-primary transition font-semibold cursor-pointer"
            >
               <IoIosArrowBack className="text-lg" />
               Back
            </button>
         </div>

         {/* Header */}
         <h1 className="text-4xl font-bold text-center text-base-content mb-8">
            Update Coffee
         </h1>

         {/* Form card */}
         <div className="max-w-4xl mx-auto bg-base-200 shadow-lg rounded-xl p-8">
            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Input Fields */}
               <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Coffee Name</label>
                  <input
                     id="name"
                     name="name"
                     type="text"
                     defaultValue={updateCoffee.name}
                     placeholder="Coffee Name"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               <div>
                  <label htmlFor="chef" className="block mb-2 font-medium">Chef Name</label>
                  <input
                     id="chef"
                     name="chef"
                     type="text"
                     defaultValue={updateCoffee.chef}
                     placeholder="Chef Name"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               <div>
                  <label htmlFor="taste" className="block mb-2 font-medium">Taste</label>
                  <input
                     id="taste"
                     name="taste"
                     type="text"
                     defaultValue={updateCoffee.taste}
                     placeholder="Taste"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               <div>
                  <label htmlFor="category" className="block mb-2 font-medium">Category</label>
                  <input
                     id="category"
                     name="category"
                     type="text"
                     defaultValue={updateCoffee.category}
                     placeholder="Category"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               <div>
                  <label htmlFor="details" className="block mb-2 font-medium">Details</label>
                  <input
                     id="details"
                     name="details"
                     type="text"
                     defaultValue={updateCoffee.details}
                     placeholder="Details"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               <div>
                  <label htmlFor="price" className="block mb-2 font-medium">Price</label>
                  <input
                     id="price"
                     name="price"
                     type="text"
                     defaultValue={updateCoffee.price}
                     placeholder="Price"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               <div className="md:col-span-2">
                  <label htmlFor="photo" className="block mb-2 font-medium">Photo URL</label>
                  <input
                     id="photo"
                     name="photo"
                     type="text"
                     defaultValue={updateCoffee.photo}
                     placeholder="https://example.com/image.jpg"
                     className="input input-bordered w-full"
                     required
                  />
               </div>

               {/* Submit Button */}
               <div className="md:col-span-2">
                  <button
                     type="submit"
                     className="btn w-full bg-purple-950 text-white hover:bg-primary-focus transition"
                  >
                     Update Coffee
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Update;
