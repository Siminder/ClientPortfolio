import Image, { ImageProps, StaticImageData } from 'next/image';
import { FC } from 'react';

import { 
  rover,
  website,
  desktop,
} from '../assets';

interface Project {
}



const Projects = () => {
  const projects = [
    {
      id: '1',
      title: 'Artemis Project ',
      image: rover,
      description: "During the Artemis Project, we accomplished significant milestones. Firstly, we successfully programmed a raspberry pi to control a rover in a simulated lunar surface obstacle course. This involved precise commands and algorithms to navigate the rover and avoid obstacles."
    },
    {
      id: '2',
      title: 'Building my Desktop',
      image: desktop,
      description: 'I built a desktop computer solo, selecting compatible components and installing Windows 10. I also ensured cable management for a neat setup. This demonstrates my hardware assembly skills, OS installation proficiency, and attention to detail in organizing computer builds.',
    },
    {
      id: '3',
      title: 'My Own Website',
      image: website,
      description: "I developed a vinyl record website using HTML, CSS, and JavaScript. The home page featured genre tabs, a music video, and business details. Album pages displayed cover images, release dates, track lists, and prices. Users could listen to song samples and visit the band's official website. The form page collected contact information, comments, and genre preferences. This project showcased my web development abilities and passion for vinyl records."
    },
    // Add more project data as needed
  ];

  return (
    <div  className="flex flex-wrap justify-center bg-[#1e2941]">
      {projects.map((project) => (
        <div
        id="projects"
          key={project.id}
          className="bg-white mt-[10rem] dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-md m-4 w-72 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div  className= "relative w-full h-36 md:h-52">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-4 text-lg md:text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">{project.description}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Projects;
