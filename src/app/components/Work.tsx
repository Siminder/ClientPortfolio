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
      description: 'Throughout my engagement in the cybersecurity project, I successfully executed a range of responsibilities that significantly contributed to enhancing network security and user experience. I led a phishing awareness campaign, effectively educating users about the risks associated with phishing emails. By closely monitoring the firewall, I promptly detected and mitigated any potential threats, ensuring a secure network environment. In cases of compromised systems or user accounts, I swiftly implemented necessary containment measures to minimize impact. Additionally, I actively participated in cybersecurity awareness trainings, emphasizing the importance of maintaining strong security practices. Leveraging my technical expertise, I efficiently resolved network connectivity issues by splicing deteriorated CAT5 cables. Troubleshooting technical problems for end users was another key aspect of my role, ensuring seamless operations. I successfully managed the deployment and programming of Cisco phones, facilitating a smooth phone upgrade process for employees. Furthermore, I utilized the KACE Systems Deployment Appliance to reimagine laptops, streamlining the deployment process. With a keen eye for detail, I diligently monitored the KACE ticketing system, ensuring timely response and resolution to user issues. My contributions in these areas reflect my commitment to cybersecurity and my ability to effectively address diverse challenges in a dynamic environment.',
    },
    {
      companyName: 'Washington Nasa Space Grant Consortium',
      picture: Nasa,
      date: 'May 2020 - December 2020',
      description: "During my involvement in the rover development project, I played a key role in multiple areas of the project's advancement. I actively contributed to the programming of the rover using a Raspberry Pi and Python, leveraging my technical skills to ensure its smooth operation. Additionally, I conducted comprehensive research on various LIDAR cameras and sensors to identify the most suitable options for mapping the rover's path. By evaluating their capabilities and performance, I provided valuable insights to optimize the rover's mapping capabilities. Another significant contribution was my research on sealant development. I explored different techniques to create a specialized sealant capable of patching an 18-inch diameter hole while remaining removable when necessary. Through my research and analysis, I identified a balance between the sealant's strength and its ease of removal, ensuring its effectiveness in sealing the hole. These experiences demonstrate my technical proficiency, problem-solving abilities, and dedication to contributing to innovative projects."
    },
    
  ]);

  return (
    <div id="work-experience"className="bg-[#1e2941] flex justify-center items-center p-0 h-screen w-full">
      <div className="w-10/12">
        <h3 className="text-2xl font-semibold text-white mb-10">Work</h3>

        {workItems.map((work, index) => (
          <div className="flex items-start mb-8" key={index}>
           
            <Image
              src={work.picture}
              alt={work.companyName}
              className="w-10 h-10 bg-blue-100 rounded-full flex-shrink-0"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-white mb-1">{work.companyName}</h4>
              <time className="text-gray-400">{work.date}</time>
              <p className="text-gray-300 mt-2">{work.description}</p>
            </div>
          </div>
        ))}

        <hr className="border-white mt-[10rem]" />
      </div>
    </div>
  );
};

export default Work;
