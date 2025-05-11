import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/CreateContext';
import Back from './Back';

const Register = () => {
   const { userRegister } = useContext(AuthContext);
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);
      userRegister(email, password)
         .then(res => {
            console.log(res.user)

            // Save user data to the database
            const user = { name, email, password, createdAt: res.user?.metadata?.createdAt, uid: res.user?.uid };
            fetch("https://coffee-home-server-jahedulislamdev-jishans-projects-05907be7.vercel.app", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(user),
            })
               .then(res => res.json())
               .then(data => {
                  if (data.acknowledged) {
                     alert('Registration successful!')
                  }
               })
               .catch(err => console.error(err.message));
            form.reset();
         })
         .catch(err => {
            if (err.code === 'auth/email-already-in-use') {
               alert('Email already in use!')
            }
            else if (err.code === 'auth/invalid-email') {
               alert('Invalid email address!')
            }
            else if (err.code === 'auth/weak-password') {
               alert('Password should be at least 6 characters!')
            }
            else {
               console.error(err.message)
               alert('Registration failed!')
            }
         });
   }
   return (
      <div className="bg-base-200 min-h-screen">
         <Back />
         <div className="flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-xl border border-base-300">
               <h2 className="text-3xl font-bold text-center text-base-content mb-6">Create Your Account</h2>

               <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                     <label className="block text-sm font-medium text-base-content mb-1">Full Name</label>
                     <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-base-content mb-1">Email</label>
                     <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-base-content mb-1">Password</label>
                     <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        className="input input-bordered w-full"
                     />
                  </div>

                  <button type="submit" className="btn btn-primary w-full mt-4">Register</button>
               </form>

               <p className="text-sm text-center mt-6 text-base-content/70">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline">Login</Link>
               </p>
            </div>
         </div>
      </div>

   );
};

export default Register;
