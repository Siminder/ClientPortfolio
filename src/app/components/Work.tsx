"use client"
import React, { useState } from 'react';

import {
  Nasa,
  City,
  Mcallen
} from "../assets"
import Image from 'next/image';

const Work = () => {
  const [workItems, setWorkItems] = useState([
    {
      companyName: 'McAllen ISD',
      date: 'October 2020 - Present',
      picture: Mcallen,
      description: 'In my role, I assisted in the setup and deployment of Chromebooks, laptops, and iPads for students and staff. I troubleshooted technology issues, such as screen sharing, printer connectivity, and Wi-Fi problems. Additionally, I submitted tickets for damaged devices, ensured proper data wiping for devices no longer in use, and responsibly disposed of obsolete technology. I also verified and adjusted account permissions on desktops and laptops to maintain security. My experience reflects proficiency in device management, technical troubleshooting, and attention to detail, ensuring an efficient technology environment for students and staff.',
    },
    {
      companyName: 'City of McAllen',
      picture: City,
      date: 'May 2020 - November 2020',
      description: 'Throughout my career with the City of McAllen, I was able to gain experience in working in the different fields that make up IT such as networking, cyber security, support, telecommunications, and programming. I effectively educated users about the risks associated with phishing emails by deploying a phishing awareness campaign. When assisting in viewing the firewall, I was able to help determine if certain email addresses or ip addresses needed to be blacklisted or whitelisted. In the case of a compromised system, I learned the company’s response plan as well as created a detailed report about what cause the system to become compromised. Additionally, I actively participated in cyber security awareness trainings, emphasizing the importance of maintaining strong security practices. Leveraging my technical expertise, I efficiently resolved network connectivity issues by splicing a deteriorating CAT5 cables. Troubleshooting technical problems for end users as well as setting up desktop devices we another key aspect of my role. I was successfully able to not only replace, but configure Cisco phones, facilitating a smooth phone upgrade process for employees. Furthermore, I utilized the KACE Systems Deployment Appliance to reimagine laptops when needed. My contributions in these areas reflect my commitment to a career in the IT field as well as my ability to effectively address diverse challenges in a dynamic environment.',
    },
    {
      companyName: 'Washington Nasa Space Grant Consortium',
      picture: Nasa,
      date: 'May 2020 - December 2020',
      description: "During my involvement in the rover development project, I played a key role in multiple areas of the project's advancement. I actively contributed to the programming of the rover using a Raspberry Pi and Python, leveraging my technical skills to ensure its smooth operation. Additionally, I conducted comprehensive research on various LIDAR cameras and sensors to identify the most suitable options for mapping the rover's path. By evaluating their capabilities and performance, I provided valuable insights to optimize the rover's mapping capabilities. Another significant contribution was my research on sealant development. I explored different techniques to create a specialized sealant capable of patching an 18-inch diameter hole while remaining removable when necessary. Through my research and analysis, I identified a balance between the sealant's strength and its ease of removal, ensuring its effectiveness in sealing the hole. These experiences demonstrate my technical proficiency, problem-solving abilities, and dedication to contributing to innovative projects."
    },
   
  ]);

  return (
    <div id="work-experience" className="bg-[#1e2941] p-4">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-10">Work</h3>
  
        {workItems.map((work, index) => (
          <div className="flex items-start mb-8" key={index}>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex-shrink-0 relative">
              <Image
                src={work.picture}
                alt={work.companyName}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-lg font-semibold text-white mb-1">{work.companyName}</h4>
              <time className="text-gray-400 text-base">{work.date}</time>
              <p className="text-gray-300 mt-2 text-base">{work.description}</p>
            </div>
          </div>
        ))}
  
        <hr className="border-white mt-10" />
      </div>
    </div>
  );
        }

export default Work;
