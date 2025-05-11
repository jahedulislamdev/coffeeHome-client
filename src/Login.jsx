import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../Provider/CreateContext';
import Back from './Back';

const Login = () => {
   const { userLogin } = useContext(AuthContext);
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      userLogin(email, password)
         .then(res => {
            console.log(res.user)
            const loggedUserData = { email, lastLogAt: res.user?.metadata?.lastSignInTime }
            // save login information to the database
            fetch('http://localhost:5000/users', {
               method: "PUT",
               headers: {
                  "content-type": "application/json"
               },
               body: JSON.stringify(loggedUserData),
            }).then(res => res.json())
               .then(data => console.log(data))
               .catch(err => console.error(err.message));
            alert('Login successful!')
            form.reset();
         })
         .catch(err => { alert(err) });
   }

   return (
      <div color='bg-gray-950 mb-10'>
         <Back />
         <div className="h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
               <h2 className="text-2xl font-semibold text-center opacity-60 mb-6">Login to Your Account</h2>
               <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                     <label className="block text-gray-600 mb-1">Email</label>
                     <input
                        type="email"
                        name='email'
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div>
                     <label className="block text-gray-600 mb-1">Password</label>
                     <input
                        type="password"
                        name='password'
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full btn btn-primary"
                  >
                     Login
                  </button>
               </form>

               <div className="text-sm text-center mt-4 text-gray-600">
                  <p>
                     Don't have an account?{' '}
                     <Link to={'/register'} className="text-blue-300 hover:underline">Register</Link>
                  </p>
               </div>

               <div className="mt-6">
                  <button className="w-full flex btn">
                     <FaGoogle /> Login with Google
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
