import React, { useEffect } from 'react';
import ResumeDownload from './ResumeDownload'; // ← make sure this exists
import TargetCursor from './TargetCursor';

const AboutSection = () => {
  const skillsData = [
    { name: 'Next.js', level: 90 },
    { name: 'MERN Stack', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'WebSockets', level: 75 },
    { name: 'MQTT Protocol', level: 70 },
    { name: 'RTK Query', level: 85 },
    { name: 'Redux', level: 90 },
    { name: 'Zustand', level: 80 },
    { name: 'Recoil', level: 70 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'SQL Server', level: 75 },
    { name: 'AWS (Basics)', level: 65 },
    { name: 'Canva', level: 80 },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  }, []);
  
  return (
    <div className="w-full min-h-screen flex items-center scroll-smooth ">

      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-10 pb-20 dark:text-white">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-2 md:mb-4">
          <h2 className="text-4xl font-serif font-semibold text-[#452829] ">
            About Me
          </h2>
          <span className="w-16 h-[4px] bg-[#452829] rounded"></span>
          <span className="w-8 h-[4px] bg-[#452829] rounded"></span>
        </div>

        <h4 className=" text-xl font-semibold border w-fit bg-[#452829] text-[#FBF3D1] p-2 ">
          I'm <span >Milan Mohan Ekanna, a Full-Stack MERN Developer</span>

        </h4>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a passionate and detail-oriented Full-Stack Developer with 1.7+ years of experience building
          high-performing, accessible (WCAG-compliant), and user-friendly web applications.
          I specialize in the MERN stack with a strong focus on clean architecture, performance, and inclusive design.
          Currently seeking growth-oriented opportunities where I can contribute meaningfully while continuing to learn.
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
          {/* Left Column: Personal Info + Buttons */}
          <div className="w-full flex flex-col items-stretch gap-2">
            <h1 className='text-2xl font-serif font-semibold text-[#452829]'>My Details</h1>
            <span className="w-16 h-[4px] bg-[#452829] rounded"></span>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-between font-serif">
              <ul className="w-full text-gray-900 dark:text-gray-200">
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Website:</span> milan.dev
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">College:</span> IMS Engineering College
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Degree:</span> B.Tech in Information Technology
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Birthday:</span> 24-Oct-2001
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Location:</span> India
                </li>
              </ul>

              <ul className="w-full text-gray-900 dark:text-gray-200 font-serif">
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Email:</span> milan.dev@gmail.com
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Phone:</span> +91 6397757813
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Employment:</span> Open to opportunities
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Freelance:</span> Available
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start mt-4">
              <ResumeDownload />
              <button className="px-6 py-2 bg-[#452829] hover:bg-[#3B060A] text-[#FBF3D1] rounded-full font-bold transition-colors duration-300 border-2 border-transparent hover:border-[#FBF3D1]">
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="w-full flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2">
            <h1 className='text-2xl font-serif font-semibold text-[#452829]'>My Skills</h1>

            {skillsData.map((skill, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="w-full flex justify-between font-semibold text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="h-full bg-[#452829] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;