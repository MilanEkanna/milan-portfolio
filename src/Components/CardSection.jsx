import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CardSection = () => {
    useEffect(() => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
              
          });
      }, []);
  const navigate = useNavigate()
   const projects = [
    {
      id: 1,
      title: "CareerConnect",
      description: "A full-stack job portal built with the MERN stack that seamlessly connects job seekers with employers, featuring secure authentication and dedicated dashboards for managing listings and applications.",
      githubUrl: "https://github.com",
      liveUrl: "https://job-portal-by-milan.onrender.com/",
      imageUrl: "CareerConnect.png"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and real-time updates.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1741983139985-7fff27fffc3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1759244336115-c68d0adf6f57?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive analytics platform for social media metrics, engagement tracking, and performance optimization insights.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1759145766123-c6ec8cfe6fc9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course creation tools, progress tracking, interactive quizzes, and certification system.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1755930523772-79e4443c9e4a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Personal fitness application with workout planning, nutrition tracking, progress charts, and social challenges.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1759239572496-4ec13e7643d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
    }
  ];
  return (
    <div><main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8 m-2 font-serif ">
        <div className="max-w-7xl mx-auto">
                        <h2 
  className="text-2xl sm:text-2xl font-bold  
             text-[#FBF3D1] bg-[#452829] 
             py-2 px-4 
             w-fit
             mx-auto mb-16
             shadow-md "
>
  See My Projects
</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8  ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#452829]  shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg "
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover border-4  border-[#452829]"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFE1AF] animate-bounce mb-2">{project.title}</h3>
                  <p className="text-[#FFE1AF] mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#FFE1AF] text-[#452829] font-bold py-2 px-3 sm:px-4 rounded-lg  transition-colors text-center text-sm sm:text-base"
                    >
                      GitHub
                    </a>
                   <button onClick={()=>navigate('/project-detail')} className="flex-1 bg-[#FFE1AF] text-[#452829] font-bold py-2 px-3 sm:px-4 rounded-lg  transition-colors text-center text-sm sm:text-base">Detail</button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-indigo-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center text-sm sm:text-base"
                    >
                      Live View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main></div>
  )
}

export default CardSection








