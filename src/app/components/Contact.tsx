import Image from 'next/image';
import ts from '../assets/Taylor.jpg';

const Contact = () => {
  return (
    <>

      <div id="contact"className="flex flex-col items-center justify-center min-h-screen  bg-[#1e2941]">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full dark:bg-gray-900">
          <h2 className="text-4xl text-white flex justify-center font-bold mb-8">Contact Me</h2>
          <div className="flex flex-col items-center justify-center">
              <Image 
              src={ts}
              alt="Growing Plant" 
              width={320}
              height={32} 
              className='w-32 h-32 rounded-full mb-8'/>
            <a href="https://www.linkedin.com/in/taysweet/">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
