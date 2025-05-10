import { Link } from "react-router-dom";
import Products from "./Products";
import { FiCoffee } from "react-icons/fi";
import Footer from "./Footer";

const Home = () => {
   return (
      <div>
         <div>
            <nav>
               <div className="navbar bg-base-100">
                  <div className="flex-1">
                     <Link to={'/'} className="btn btn-ghost normal-case text-xl">Coffee House</Link>
                  </div>
                  <div className="flex-none">
                     <ul className="menu menu-horizontal p-0 space-x-7">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
         <div>
            <img className='' src="https://i.postimg.cc/wvTBrJg8/Group-68.png" />
         </div>
         <div className='grid grid-cols-4 bg-gray-00 text-base p-4 space-x-3 my-10'>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/W3ksC7Cy/1-1.png" alt="" />
               <p className='font-bold text-lg'>Awesome Aroma</p>
               <p className='font-light text-sm'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/PqctS73Z/2-1.png" alt="" />
               <p className='font-bold text-lg'>High Quality</p>
               <p className='font-light text-sm'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/HLjY4m2d/3-1.png" alt="" />
               <p className='font-bold text-lg'>Pure Grades</p>
               <p className='font-light text-sm'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className=' p-4 space-y-2 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300'>
               <img className='w-16 bg-gray-500 p-3 rounded' src="https://i.postimg.cc/7ZKP2hSK/4-1.png" alt="" />
               <p className='font-bold text-lg'>Proper Roasting</p>
               <p className='font-light text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
         </div>
         <div>
            <div className='text-center p-3'>
               <p className='text-light text-sm border inline-block px-3 py-1 rounded-2xl font-mono'>--- Slip & Savor ---</p>
               <p className='text-lg font-bold'>Our Popular Products</p>
               <Link to={'/add_coffee'} className="btn bg-purple-950 my-2">Add coffee<FiCoffee /></Link>
            </div>
            <div className='my-8'>
               <Products />
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Home;