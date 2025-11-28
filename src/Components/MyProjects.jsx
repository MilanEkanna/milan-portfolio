import React from 'react'

const MyProjects = () => {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },

        { name: "LinkedIn", url: "https://linkedin.com", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
        { name: "Hashnode", url: "https://hashnode.com", icon: "M8.639 21.938c-1.018-.138-2.191-.588-3.054-1.164-1.063-.708-2.076-1.9-2.6-3.088-.839-1.906-.837-4.074.005-5.987.482-1.095 1.341-2.162 2.36-2.916l.423-.316-.012-.55c-.017-.761.119-1.484.425-2.253.317-.795.676-1.331 1.286-1.942 1.016-1.016 2.254-1.545 3.688-1.584.603-.017.793.002 1.381.15.399.102 1.082.37 1.437.571l.272.153.423-.15c.735-.261 1.226-.353 1.938-.353.938 0 1.718.202 2.525.645 1.33.734 2.295 2.021 2.617 3.511.119.539.119 1.5 0 2.038-.097.44-.311 1.004-.545 1.423l-.164.293.164.293c.234.419.448.983.545 1.423.119.538.119 1.499 0 2.038-.322 1.49-1.287 2.777-2.617 3.511-.811.447-1.585.645-2.525.645-.712 0-1.203-.092-1.938-.353l-.423-.15-.272.153c-.355.201-1.038.469-1.437.571-.588.148-.778.167-1.381.15-.382-.011-.821-.04-.973-.068z" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" }
    ];
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution with React and Node.js, featuring real-time inventory management and secure payment processing.",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            imageUrl: "https://images.unsplash.com/photo-1758012561437-5e272eb9e1d1?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <div><main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8 m-2 font-serif">
            <div className="max-w-7xl mx-auto">


                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    {/* Left: Title */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#452829]">
                            See My Projects
                        </h2>
                        <div className="flex flex-col mt-1">
                            <span className="w-44 h-[4px] bg-[#452829] rounded"></span>
                            <span className="w-24 h-[4px] bg-[#452829] rounded mt-1"></span>
                        </div>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex justify-end items-center gap-4 flex-wrap">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                                aria-label={social.name}
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#452829] rounded-full flex items-center justify-center
                        group-hover:bg-[#7B542F] group-hover:scale-105 transition-all duration-300 shadow-sm">
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={social.icon} />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                         text-xs font-medium text-[#FBF3D1] bg-black/70 px-2 py-1 rounded
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         whitespace-nowrap z-10">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#452829] rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                            <div className="h-40 sm:h-48 overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
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
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#FFE1AF] text-[#452829] font-bold py-2 px-3 sm:px-4 rounded-lg  transition-colors text-center text-sm sm:text-base"
                                    >
                                        Detail
                                    </a>
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

export default MyProjects








