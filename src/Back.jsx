import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
const Back = () => {
   const navigate = useNavigate();
   return (
      <button
         onClick={() => navigate(-1)}
         className="flex items-center pt-5 mx-5 gap-2 text-base-content hover:text-primary transition font-semibold cursor-pointer"
      >
         <IoIosArrowBack className="text-lg" />
         Back
      </button>
   );
};

export default Back;