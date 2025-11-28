import { useState, useEffect } from 'react';

const FooterSection = () => {
   
    const socialLinks = [
        { name: "GitHub", url: "https://github.com", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
        { name: "Instagram", url: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
        { name: "Hashnode", url: "https://hashnode.com", icon: "M8.639 21.938c-1.018-.138-2.191-.588-3.054-1.164-1.063-.708-2.076-1.9-2.6-3.088-.839-1.906-.837-4.074.005-5.987.482-1.095 1.341-2.162 2.36-2.916l.423-.316-.012-.55c-.017-.761.119-1.484.425-2.253.317-.795.676-1.331 1.286-1.942 1.016-1.016 2.254-1.545 3.688-1.584.603-.017.793.002 1.381.15.399.102 1.082.37 1.437.571l.272.153.423-.15c.735-.261 1.226-.353 1.938-.353.938 0 1.718.202 2.525.645 1.33.734 2.295 2.021 2.617 3.511.119.539.119 1.5 0 2.038-.097.44-.311 1.004-.545 1.423l-.164.293.164.293c.234.419.448.983.545 1.423.119.538.119 1.499 0 2.038-.322 1.49-1.287 2.777-2.617 3.511-.811.447-1.585.645-2.525.645-.712 0-1.203-.092-1.938-.353l-.423-.15-.272.153c-.355.201-1.038.469-1.437.571-.588.148-.778.167-1.381.15-.382-.011-.821-.04-.973-.068z" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" }
    ];

    return (
        <footer className="text-[#FFE1AF]">
            
            <div className="bg-[#452829] py-8 px-4 font-serif">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-8">
                     
                        <div className="w-full lg:w-1/5">
                            <h2 className="inline-block text-2xl pb-2 mb-4 border-b-2 border-[#FFB74D] font-semibold">
                                By WithMilan.dev
                            </h2>
                            <p className="text-justify text-[#FFE1AF]/90 text-sm leading-relaxed">
                               Hi, I'm Milan, a full-stack MERN developer with 1.7+ years of experience building responsive, accessible, and high-performing web applications. I specialize in MERN Stack and related JavaScript frameworks and Libraries, WCAG-compliant accessibility (a11y), and creating intuitive user experiences. Currently seeking opportunities where I can grow as a developer while solving real-world problems with clean, scalable code
                            </p>
                        </div>

                      
                        <div className="w-full sm:w-auto">
                            <h2 className="inline-block text-xl pb-2 mb-4 border-b-2 border-[#FFB74D] font-semibold">
                                Quick Links
                            </h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-[#FFB74D] transition-colors">About Me</a></li>
                                <li><a href="#" className="hover:text-[#FFB74D] transition-colors">Project &amp; Work</a></li>
                                <li><a href="#" className="hover:text-[#FFB74D] transition-colors">Hire Me</a></li>
                                <li><a href="#" className="hover:text-[#FFB74D] transition-colors">My Research Paper</a></li>
                            </ul>
                        </div>

                        {/* Blog Links */}
                        <div className="w-full sm:w-auto font-serif">
                            <h2 className="inline-block text-xl pb-2 mb-4 border-b-2 border-[#FFB74D] font-semibold">
                                Latest Blog
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-[#FFB74D] transition-colors">
                                        Building a Full-Stack MERN App from Scratch
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#FFB74D] transition-colors">
                                        JWT Authentication in Node.js & React
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#FFB74D] transition-colors">
                                        Optimizing MongoDB Queries for High Traffic Apps
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#FFB74D] transition-colors">
                                        Deploying MERN Apps on AWS EC2 & S3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#FFB74D] font-medium">
                                        See More →
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="w-full sm:w-auto lg:w-1/5">
                            <h2 className="inline-block text-xl pb-2 mb-4 border-b-2 border-[#FFB74D] font-semibold">
                                Connect With Me
                            </h2>
                            <div className="flex  flex-wrap   ">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative"
                                    >
                                        <div className=" w-10 h-10 sm:w-12 sm:h-12 bg-[#452829] rounded-full flex items-center justify-center group-hover:bg-[#7B542F] transition-colors duration-200">
                                            <svg className=" w-5 h-5 sm:w-6 sm:h-6 text-white " fill="currentColor" viewBox="0 0 24 24">
                                                <path d={social.icon} />
                                            </svg>
                                        </div>
                                        <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-sm font-bold text-[#FBF3D1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap px-1">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#3A2021] py-3 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
                        <div>
                            Copyright © WithMilan.dev All Rights Reserved.
                        </div>
                        <div>Made with ❤️ by WithMilan.dev</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;