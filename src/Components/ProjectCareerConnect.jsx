import React, { useEffect } from 'react';

const features = [
  {
    title: 'MERN Stack Architecture',
    description: 'Designed and developed a full-stack job portal using MongoDB, Express.js, React, and Node.js — ensuring scalability, maintainability, and rapid feature delivery.'
  },
  {
    title: 'Secure Authentication',
    description: 'Implemented robust role-based authentication (Job Seeker / Recruiter / Admin) using JWT and bcrypt for password hashing, preventing unauthorized access and data leaks.'
  },
  {
    title: 'Cloud-Powered Media Handling',
    description: 'Integrated Cloudinary for secure, optimized profile/resume uploads — reducing server load and enabling fast CDN delivery of user assets globally.'
  },
  {
    title: 'State Management & UI Consistency',
    description: 'Managed global application state with Redux (RTK) and built a modern, accessible UI using Shadcn/ui and Tailwind CSS — ensuring responsiveness across all devices.'
  },
  {
    title: 'Real-Time Job Matching',
    description: 'Engineered dynamic job recommendation logic based on user skills, preferences, and activity — improving engagement and job-application relevance.'
  },
  {
    title: 'Production Deployment & DevOps',
    description: 'Deployed the app on a cloud platform (e.g., Render/Vercel), configured environment variables, optimized MongoDB queries, and ensured 99%+ uptime post-launch.'
  }
];

// Tech stack used — clean & ATS-friendly
const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
  'MongoDB', 'Redux / RTK', 'JWT', 'bcrypt', 'Cloudinary',
  'Shadcn/ui', 'Tailwind CSS', 'Render/Vercel'
];

const ProjectCareerConnect = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  }, []);
  return (
    <section className="p-4 sm:p-6 lg:p-8 mx-auto max-w-6xl mb-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-1xl font-bold text-center 
                       text-[#FBF3D1] bg-[#452829] 
                       py-2 px-6 
                       w-fit mx-auto 
                       shadow-md transition-all duration-300 hover:scale-105">
          ✦ CareerConnect | Features
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-2/5 flex flex-col items-center">
          <div className="mb-4 w-full flex justify-center">
            <img
              src="/CareerConnect.png"
              alt="CareerConnect UI Screenshot"
              className=" w-full max-w-xs md:max-w-none  shadow-lg border-4 border-[#452829] "
            />
          </div>

          {/* UI Label */}
          <div className="text-center mb-3">
            <span className="inline-block bg-[#452829] text-[#FBF3D1] px-3 py-1 rounded-full text-xl font-medium mb-4 mt-6">
              CareerConnect UI
            </span>
          </div>

          {/* Tech Stack */}
          <div className="text-left max-w-2xl mx-auto">
            <h3 className="text-sm font-semibold text-[#452829] uppercase tracking-wider mb-2">
              <span className="inline-block mr-1">✦</span> Tech Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center justify-center 
                   bg-[#452829]/10 text-[#452829] font-medium 
                   text-xs px-3 py-1.5 rounded-lg 
                   transition-all duration-200 
                   hover:bg-[#452829]/20 hover:scale-[1.02]
                   border border-[#452829]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="md:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="h-full p-4 border-2 border-[#452829] border-t-0 border-l-0 
                           rounded-br-xl bg-[#F5F5F0] hover:bg-[#FDE7B3] transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#452829] mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-md leading-relaxed  font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCareerConnect;