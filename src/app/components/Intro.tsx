import Image from 'next/image';
import { FC } from 'react';
import ts from '../assets/Taylor.jpg';




interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div id="#home"className="flex flex-col justify-center items-center min-h-screen bg-[#1e2941]">
      <div className="container mx-auto text-white">
        <div className="flex items-center">
          <div>
            <h2 className="text-4xl mt-[25rem] font-bold">About Me</h2>
            <p className="text-lg mt-4">
              Welcome to my online Portfolio. My name is Taylor Sweet and I have
              a Bachelor degree in Computer and Information Technology as well
              as an Associate degree in Teaching - Secondary Education. I am
              passionate about technology and would like to have a career in
              cybersecurity or tech support.
            </p>
          </div>
          <Image 
            src={ts}
            alt="profile"
            width={325}
            height={300}
            className=" rounded-full ml-8"/>
        </div>
      </div>
      <div className="flex-grow"></div>
      <hr className="border-white my-8 w-10/12" />
    </div>
  );
};

export default About;
