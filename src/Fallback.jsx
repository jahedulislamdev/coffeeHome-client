import React from 'react';

const Fallback = () => {
   return (
      <div className="flex items-center justify-center h-screen">
         <button className="btn btn-soft">
            <span className="loading loading-spinner loading-sm"></span>
            loading
         </button>
      </div>
   );
};

export default Fallback;