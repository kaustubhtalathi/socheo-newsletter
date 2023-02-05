import './App.css';

import { useState } from 'react';
import { toast } from "react-toastify";

import Footer from "./components/Footer";
import Navbar from './components/Navbar';

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
      timestamp: new Date().toGMTString(),
    };

    const response = await fetch("https://lrd0dwpnkd.execute-api.us-east-1.amazonaws.com", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(formDataCopy)
    }).then(() => {
      toast.success("Subscribed successfully!!!");
    });

    return response.json();
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
      <main className="flex-grow">
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
    </div>
  );
}

export default App;
