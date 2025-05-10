import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Back from './Back';

const ViewUser = () => {
   const user = useLoaderData();
   return (
      <div className='min-h-screen bg-base-200'>
         <Back />
         <div className="flex justify-center items-center px-4">
            <div className="bg-base-100 border border-base-300 shadow-xl rounded-xl p-8 w-full max-w-md">
               <h2 className="text-2xl font-bold text-center text-base-content mb-6">User Details</h2>
               <div className="space-y-4 text-base-content">
                  <p>
                     <span className="font-semibold">Name:</span>{' '}
                     {user?.name || <span className="text-base-content/50">N/A</span>}
                  </p>
                  <p>
                     <span className="font-semibold">Email:</span>{' '}
                     {user?.email || <span className="text-base-content/50">N/A</span>}
                  </p>
                  <p>
                     <span className="font-semibold">Created Date:</span>{' '}
                     {user?.createdAt || <span className="text-base-content/50">N/A</span>}
                  </p>
                  <p>
                     <span className="font-semibold">Last Login:</span>{' '}
                     {user?.lastLogAt || <span className="text-base-content/50">N/A</span>}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ViewUser;
