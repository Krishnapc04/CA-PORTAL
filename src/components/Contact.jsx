import React from 'react';
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";


const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-4" id='contact'>
      <h1 className="text-3xl font-bold mb-8 text-yellow-300">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* Card 1 */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
          <img
            src="/Heads/krishna.jpeg"
            alt="Head 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Krishna Chaudhari</h2>
          <p className="mb-2">General Secretary</p>
          <p className='flex align-center'><IoMail className='text-xl mr-1 mt-1'/> - krishnachaudhari2309@gmail.com</p>
          <p className='flex align-centerc mt-2'><IoCall className='text-xl mr-1 mt-1'/> - 8767650199</p>
        </div>


        {/* Card 2 */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
          <img
            src="/Heads/deven.JPG"
            alt="Head 2"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Deven Shinde</h2>
          <p className="mb-2">General Secretary</p>
          <p className='flex align-center'><IoMail className='text-xl mr-1 mt-1'/> -   devenshinde346@gmail.com</p>
          <p className='flex align-center mt-2'><IoCall className='text-xl mr-1 mt-1'/> - 7057101469</p>
        </div>


      </div>
    </div>
  );
};

export default Contact;
