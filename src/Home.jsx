import { Link, NavLink } from "react-router-dom";
import Products from "./Products";
import { FiCoffee } from "react-icons/fi";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
   return (
      <div>
         <div>
            <img className='h-[450px] w-full object-cover object-center' src="https://i.pinimg.com/1200x/e7/46/70/e746704afe634bfad4c0917bcf777523.jpg" />
         </div>
         <div className='grid grid-cols-4 bg-gray-00 text-base p-4 space-x-3 my-10'>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/W3ksC7Cy/1-1.png" alt="" />
               <p className='font-bold text-lg '>Awesome Aroma</p>
               <p className='font-light text-sm text-base-content/60'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/PqctS73Z/2-1.png" alt="" />
               <p className='font-bold text-lg text-base-content/70'>High Quality</p>
               <p className='font-light text-sm text-base-content/60'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/HLjY4m2d/3-1.png" alt="" />
               <p className='font-bold text-lg text-base-content/70'>Pure Grades</p>
               <p className='font-light text-sm text-base-content/60'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/7ZKP2hSK/4-1.png" alt="" />
               <p className='font-bold text-lg text-base-content/70'>Proper Roasting</p>
               <p className='font-light text-sm text-base-content/60'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
         </div>
         <div>
            <div className='text-center p-3'>
               <p className='text-light text-sm border inline-block px-3 py-1 rounded-2xl font-mono'>--- Slip & Savor ---</p>
               <p className='text-lg font-bold text-base-content/70'>Our Popular Products</p>
               <Link to={'/add_coffee'} className="btn bg-purple-950 my-2">Add coffee<FiCoffee /></Link>
            </div>
            <div className='my-8'>
               <Products />
            </div>
         </div>
      </div>
   );
};

export default Home;