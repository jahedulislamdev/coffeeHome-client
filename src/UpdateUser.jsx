import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Back from './Back';

const UpdateUser = () => {
   const userData = useLoaderData();
   const navigate = useNavigate()
   const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const updatedData = { name }
      console.log(updatedData)
      fetch(`http://localhost:5000/users/update/${userData._id}`, {
         method: "PUT",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(updatedData)
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               alert('Updated Successfully')
               navigate('/')
            }
            console.log(data)
         })
         .catch(err => console.error(err))
   }
   return (
      <div className='mb-10'>
         <Back />
         <div className="max-w-md mx-auto flex items-center justify-center px-4">
            <div className="bg-base-100 border border-gray-700 p-8 rounded-xl shadow-lg w-full">
               <p className="text-center text-2xl font-bold mb-6 border-b border-gray-700 pb-3 text-base-content">Update User</p>

               <form onSubmit={handleUpdate} className="space-y-5">
                  {/* User Name */}
                  <div>
                     <label htmlFor="name" className="block mb-1 font-medium text-base-content">User Name</label>
                     <input
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={userData.name}
                        placeholder="Enter user name"
                        className="input input-bordered w-full"
                        required
                     />
                  </div>

                  {/* Chef Name */}
                  <div>
                     <label htmlFor="chef" className="block mb-1 font-medium text-base-content">Chef Name</label>
                     <input
                        id="chef"
                        name="chef"
                        type="text"
                        defaultValue={userData.email}
                        disabled
                        placeholder="Enter chef name"
                        className="input input-bordered w-full"
                        required
                     />
                  </div>

                  {/* Submit Button */}
                  <div>
                     <button
                        type="submit"
                        className="btn bg-purple-900 w-full"
                     >
                        Update User
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>

   );
};

export default UpdateUser;