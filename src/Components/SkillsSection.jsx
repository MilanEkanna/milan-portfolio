import React from 'react';

// Skill list with clean icons (no trailing spaces)
const skills = [
  // Core Stack
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  // State Management
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'RTK Query', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Zustand', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Recoil', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  // Styling


  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  // Realtime & Protocols
  { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MQTT', icon: 'https://simpleicons.org/icons/mqtt.svg' },
  // Tools & Platforms
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Canva', icon: 'https://simpleicons.org/icons/canva.svg' },
];



// Single Skill Card (compact, uniform)
const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center min-w-[110px] px-3 py-6 bg-[#452829] rounded-full shadow-sm whitespace-nowrap">
    <img
      src={skill.icon}
      alt={skill.name}
      className="w-9 h-9 mb-1.5"
      loading="lazy"
    />
    <span className="text-[11px] font-medium text-[#FAE9C3] leading-tight">
      {skill.name}
    </span>
  </div>
);

// Marquee Component
const SkillsMarquee = () => {

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="w-full py-8 overflow-hidden  relative">
      <h2
          className="text-2xl sm:text-2xl font-bold text-center 
             text-[#FBF3D1] bg-[#452829] 
             py-2 px-4 
             w-fit
             mx-auto mb-16
             shadow-md transition-all duration-300 hover:scale-110"
      >
        My Skills :
      </h2>

      {/* Left fade mask */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FAE9C3] to-transparent z-10 pointer-events-none"></div>
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FAE9C3] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee container */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedSkills.map((skill, idx) => (
            <div key={idx} className="flex-shrink-0 mx-3">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>

       
      {/* ✅ Optimized smooth animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          /* ✅ Critical for performance */
          will-change: transform;
          transform: translateZ(0); /* forces GPU layer */
          animation: marquee 10s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Prevent layout shift on low-DPR screens */
        @media (prefers-reduced-motion: no-preference) {
          .animate-marquee {
            animation-timing-function: linear;
          }
        }
      `}</style>
      
    </section>
  );
};

export default SkillsMarquee;