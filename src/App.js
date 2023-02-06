import './App.css';

import { useState } from 'react';

import Footer from "./components/Footer";
import Navbar from './components/Navbar';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    email: ""
  });

  const {
    email,
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formDataCopy = {
      ...formData,
      id: new Date().toGMTString(),
    };

    const response = await axios.post('https://lrd0dwpnkd.execute-api.us-east-1.amazonaws.com/emails', formDataCopy)
    .then((res) => {
      console.log(res);
      toast.success("Subscribed successfully!");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error while subscribing, please try again!");
    });

    return response;
  }

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    } else if (e.target.value === "false") {
      boolean = false;
    }

    // Text/Booleans/Numbers
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: boolean ?? e.target.value,
    }));

  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="flex items-center flex-grow">
        <div className="w-3/4 md:w-1/2 lg:w-1/4 mt-0 mr-auto ml-auto">
          <form onSubmit={onSubmit}>
            <div className="form-control w-full grid grid-cols-1 mb-8">
              <label className="label">
                <span className="label-text">Stay in touch</span>
              </label>
              <input type="email" name="email" id="email" value={email} placeholder="abc@xyz.com" className="input input-bordered w-full" onChange={onMutate} required />
              <button className="btn btn-neutral mt-5 text-white">Subscribe</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
