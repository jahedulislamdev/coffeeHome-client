import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const App = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
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
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffeeData)
    }).then(res => res.json())
      .then(data => {
        data.acknowledged === true ?
          Swal.fire({ title: 'Coffee Added Successfully', icon: 'success', showConfirmButton: false, timer: 1500 }) :
          Swal.fire({ title: 'Failed to Add Coffee', icon: 'error', showConfirmButton: false, timer: 1500 })
        form.reset();
        console.log(data);
      }
      ).catch(err => console.error(err));

  }
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="bg-gray-900 rounded-lg p-8 w-full max-w-2xl">
          <button onClick={() => navigate(-1)} className='btn'><IoIosArrowBack />Back</button>
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-400">Add a New Coffee</h1>
          <p className="text-center text-gray-600 mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleAddCoffee} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" className="input input-primary w-full" placeholder="Name" />
              <input type="text" name="chef" className="input input-primary w-full" placeholder="Chef" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="number" name="price" className="input input-primary w-full" placeholder="price" />
              <input type="text" name="taste" className="input input-primary w-full" placeholder="Taste" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="category" className="input input-primary w-full" placeholder="Category" />
              <input type="text" name="details" className="input input-primary w-full" placeholder="Details" />
            </div>
            <div>
              <input type="url" name="photo" className="input input-primary w-full" placeholder="Photo URL" />
            </div>
            <button type="submit" className="btn bg-purple-800 w-full py-2 text-white font-semibold rounded-lg">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;