import React, { useState } from 'react';
import { FaEdit, FaRegEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Back from './Back';
import Swal from 'sweetalert2';

const Dashboard = () => {
   const data = useLoaderData(); // Replace with your actual data
   const [totalUser, setTotalUser] = useState(data);
   const handleDelete = (id) => {
      console.log(id)
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then(res => {
         if (res.isConfirmed) {
            fetch(`https://coffee-home-server-jahedulislamdev-jishans-projects-05907be7.vercel.app/${id}`, {
               method: "DELETE",
               headers: { "content-type": "application/josn" },
               body: JSON.stringify(id)
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
                     const remaining = totalUser.filter(user => user._id !== id);
                     setTotalUser(remaining);
                  }
               })
               .catch(err => console.error(err))
         }
      })

   }
   return (
      <div className='bg-base-200 p-2'>
         <Back />
         <div className='flex items-center justify-center h-80 p-5'>
            <div className="overflow-x-auto rounded-box border border-base-content/10 shadow-lg bg-base-100 w-full max-w-6xl">
               <table className="table table-zebra text-base-content">
                  {/* Table Head */}
                  <thead className="bg-base-300 text-base font-semibold">
                     <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Created At</th>
                        <th>Last Log In</th>
                        <th>Action</th>
                     </tr>
                  </thead>

                  <tbody>
                     {data.length === 0 ? (
                        <tr>
                           <td colSpan="6" className="text-center py-6 text-base-content/60">
                              No data found!
                           </td>
                        </tr>
                     ) : (
                        totalUser.map((user, index) => (
                           <tr key={user._id} className="hover">
                              <td className="py-3">{index + 1}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.password}</td>
                              <td>{user.createdAt}</td>
                              <td>{user.lastLogAt}</td>
                              <td className="flex items-center gap-2">
                                 <Link to={`/user/details/${user._id}`} className="btn px-1 btn-sm btn-ghost text-info tooltip" data-tip="View">
                                    <FaRegEye className="text-xl" />
                                 </Link>
                                 <Link to={`/user/update/${user._id}`} className="btn px-1 btn-sm btn-ghost text-warning tooltip" data-tip="Edit">
                                    <FaEdit className="text-xl" />
                                 </Link>
                                 <button onClick={() => handleDelete(user._id)} className="btn px-1 btn-sm btn-ghost text-error tooltip" data-tip="Delete">
                                    <MdDelete className="text-xl" />
                                 </button>
                              </td>
                           </tr>

                        ))
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
