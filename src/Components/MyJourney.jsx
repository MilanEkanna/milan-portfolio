// src/components/MyJourney.jsx
import React from 'react';
import { AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon, SparklesIcon, EyeIcon } from '@heroicons/react/24/outline';

const MyJourney = () => {
  // Enhanced data with an 'icon' field for visual appeal
  const journeyData = [
    { date: 'Early 2020', title: '# Admission at IMS Engineering College', desc: 'Started my B.Tech in Information Technology at IMS Engineering College, Ghaziabad. This marked the beginning of my journey in the tech world, where I built a strong foundation in core computer science concepts and programming fundamentals.', icon: AcademicCapIcon },
    { date: '2020–2024', title: '#B.Tech in IT — Learning & Growth', desc: 'Dived deep into core CS concepts, web development, database management systems, and software engineering principles. Graduated with an SGPA of 7.8, gaining hands-on experience with various technologies and participating in academic projects that shaped my technical skills.', icon: AcademicCapIcon },
    { date: 'Early 2024', title: '#Campus Placement at Chetu', desc: 'Got selected at Chetu India Pvt Ltd during college placements! Felt proud to secure a position as a MERN developer. This was a significant milestone that validated my hard work and technical skills during my college years.', icon: BriefcaseIcon },
    { date: 'April 2024', title: '#Onboarding at Chetu', desc: 'Officially joined Chetu as a MERN developer. Started with high hopes and excitement to grow as a developer. Eager to apply my academic knowledge to real-world projects and contribute to client solutions.', icon: BriefcaseIcon },
    { date: 'Apr–Sep 2024', title: '#6-Month Intensive Training', desc: 'Underwent rigorous training in MERN stack — React, Node, Express, MongoDB, along with modern tools and practices. This intensive period helped me master full-stack development and understand enterprise-level application architecture.', icon: SparklesIcon },
    { date: 'Oct 2024', title: '#MERN Developer — Live Projects!', desc: 'Started working on real client projects. Delivered 3+ live projects, presented demos to clients, and gained valuable experience in project lifecycle management, client communication, and delivering quality solutions under tight deadlines.', icon: RocketLaunchIcon },
    { date: 'Late 2024', title: '#Tech Stack Expansion', desc: 'Mastered TypeScript, Next.js, Tailwind CSS, WebSockets, MQTT Protocol, and advanced state management libraries like RTK Query, Redux, Zustand, and Recoil. Also gained experience with databases like MongoDB, SQL Server, and PostgreSQL.', icon: RocketLaunchIcon },
    { date: 'Early 2025', title: '#Focus on Accessibility (a11y)', desc: 'Deepened expertise in WCAG-compliant, inclusive web development. Specialized in creating accessible interfaces that work for all users, including those with disabilities, ensuring compliance with international accessibility standards.', icon: EyeIcon },
    { date: 'Mid 2025', title: '#Exploring AI & TypeScript', desc: 'Started learning AI/ML fundamentals and exploring ways to integrate AI tools and features into web applications. Continued focus on TypeScript for better code maintainability and developer experience.', icon: RocketLaunchIcon },
    { date: '2025+', title: '#Looking Ahead', desc: 'Seeking growth opportunities in remote work, freelancing, or government positions with stability and good pay. Open to roles that leverage my MERN stack expertise, TypeScript skills, and passion for creating accessible, user-friendly web applications.', icon: SparklesIcon },
  ];

  return (
    <section className="journey-section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#452829]">
          ✦ My Journey as MERN Developer
        </h2>
        <p className="text-[#452829] mt-4 max-w-2xl mx-auto opacity-80">
          Not always straight — but every turn taught me something new.
        </p>
      </div>

      {/* Desktop View Timeline (Hidden on mobile) */}
      <div className="hidden md:block relative">
        {/* The central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#6d4a45] h-full" aria-hidden="true"></div>

        <div className="relative z-10 space-y-12">
          {journeyData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.icon; // Get the icon component

            return (
              <div key={idx} className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Card */}
                <div className={`w-1/2 p-4 ${isEven ? 'pr-12' : 'pl-12'}`}>
                    <div className="journey-card">
                        <span className="text-2xl font-semibold text-[#FFD08A] p-1 rounded-xl border-4 border-double border-[#FFD08A] pr-4 pl-4">{item.date}</span>
                        <h3 className="text-lg md:text-xl font-bold text-[#FFE1AF] mt-6">{item.title}</h3>
                        <p className="text-[#E6C29E] mt-3 leading-relaxed">{item.desc}</p>
                    </div>
                </div>

                {/* Timeline Icon/Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="timeline-marker">
                        <Icon className="w-5 h-5 text-[#452829]" />
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View — Simplified vertical with mini path */}
      <div className="md:hidden space-y-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#6d4a45] " aria-hidden="true"></div>
        {journeyData.map((item, idx) => {
            const Icon = item.icon;
            return (
                <div key={idx} className="relative pl-12 mr-4">
                    <div className="absolute left-0 top-0">
                        <div className="mobile-timeline-marker">
                            <Icon className="w-4 h-4 text-[#452829]" />
                        </div>
                    </div>
                    <div className="journey-card-mobile">
                        <span className="text-xs font-semibold text-[#FFD08A]">{item.date}</span>
                        <h3 className="text-lg font-bold text-[#FFE1AF] mt-1">{item.title}</h3>
                        <p className="text-[#E6C29E] mt-2 leading">{item.desc}</p>
                    </div>
                </div>
            );
        })}
      </div>

      <style jsx>{`
        /* --- General Section Styling --- */
        .journey-section {
          padding: 1rem 1rem;
          max-width: 72rem; /* max-w-6xl */
          margin-left: auto;
          margin-right: auto;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        /* --- Shared Card Styling (Desktop & Mobile) --- */
        .journey-card {
          background-color: #452829; /* A deep brown/maroon */
          border-radius: 0.75rem; /* rounded-xl */
          padding: 1.5rem; /* p-6 */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
          border: 1px solid #6d4a45;
          /* Add interactive transition */
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .journey-card:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* --- Desktop Timeline Marker (The circle with the icon) --- */
        .timeline-marker {
          width: 50px;
          height: 50px;
          background-color: #FFD08A; /* A light yellow/gold accent color */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid white; /* White border to stand out against the line */
          box-shadow: 0 0 0 3px #452829; /* A subtle glow/border effect */
          z-index: 20;
        }

        /* --- Mobile Timeline Marker --- */
        .mobile-timeline-marker {
          width: 32px;
          height: 32px;
          background-color: #FFD08A;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 0 0 2px #452829;
          z-index: 20;
          left: -16px; /* Adjust position to align with the timeline line */
          top: 0;
        }

        /* --- Mobile View Specific Styling --- */
        .journey-card-mobile {
            background-color: #452829;
            border-radius: 0.75rem;
            padding: 1.25rem; /* p-5 */
            border: 1px solid #6d4a45;
        }
      `}</style>
    </section>
  );
};

export default MyJourney;