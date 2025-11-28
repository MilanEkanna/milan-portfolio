import React, { useEffect } from 'react';
import '../index.css';  
import ResumeDownload from './ResumeDownload';
import TrueFocus from './TrueFocus';

const HeroSection = () => {

    useEffect(() => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
              
          });
      }, []);
  const typewriterLines = [
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "Passionate about Clean Code",
    "Expertise In Javascript"
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/MilanEkanna", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
    
    { name: "LinkedIn", url: "https://www.linkedin.com/in/milan-fullstack/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { name: "Hashnode", url: "https://hashnode.com", icon: "M8.639 21.938c-1.018-.138-2.191-.588-3.054-1.164-1.063-.708-2.076-1.9-2.6-3.088-.839-1.906-.837-4.074.005-5.987.482-1.095 1.341-2.162 2.36-2.916l.423-.316-.012-.55c-.017-.761.119-1.484.425-2.253.317-.795.676-1.331 1.286-1.942 1.016-1.016 2.254-1.545 3.688-1.584.603-.017.793.002 1.381.15.399.102 1.082.37 1.437.571l.272.153.423-.15c.735-.261 1.226-.353 1.938-.353.938 0 1.718.202 2.525.645 1.33.734 2.295 2.021 2.617 3.511.119.539.119 1.5 0 2.038-.097.44-.311 1.004-.545 1.423l-.164.293.164.293c.234.419.448.983.545 1.423.119.538.119 1.499 0 2.038-.322 1.49-1.287 2.777-2.617 3.511-.811.447-1.585.645-2.525.645-.712 0-1.203-.092-1.938-.353l-.423-.15-.272.153c-.355.201-1.038.469-1.437.571-.588.148-.778.167-1.381.15-.382-.011-.821-.04-.973-.068z" },
    { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" }
  ];

  return (
    <section
      id="home"
      className=" flex flex-col items-center justify-start text-center py-10 px-4 bg-[#452829] text-white min-h-screen/2 mx-4 rounded-lg "
    >

<div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 px-2 rounded-full">


  <div className="relative flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 rounded-lg ">
   
    <img src="mypic.jpg" alt="Milan" className="w-full h-full object-cover rounded-full border-8 border-double border-[#FBF3D1] " />
    <div className="w-full sm:w-auto mt-4 ">
                           
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
                                            <svg className=" w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
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

  

   
  <div className="flex flex-col items-start w-full lg:w-2/3 mt-4 ">
   <h3 className=" text-[#FFB74D]  w-full mb-6 font-serif font-semibold cursor-pointer  ">
  <TrueFocus
    sentence={"Welcome to withMilan.dev"}
    manualMode={false}
    blurAmount={5}
    borderColor="red"
    animationDuration={1}
    pauseBetweenAnimations={1}
  />
</h3>


  {/* Left-aligned intro */}
  <div className="w-full">
    <h2 className="text-xl md:text-4xl font-bold text-left ">
      Hello, I'm <span className="text-white">Milan ...</span>
    </h2>
    <h3 className="text-xl md:text-2xl font-semibold mt-2 text-left">
      <TypewriterText lines={typewriterLines} />
    </h3>
  </div>

    {/* About Me */}

    
    <p className="mt-8 text-white/90 text-lg leading-relaxed max-w-2xl text-left font-serif ">
      Hi, I'm Milan — a full-stack MERN developer with 1.7+ years of experience building responsive, accessible, and high-performing web applications. 
      I specialize in plain JavaScript and TypeScript, WCAG-compliant accessibility (a11y), and creating intuitive user experiences. 
      Currently seeking opportunities where I can grow as a developer while solving real-world problems with clean, scalable code.
    </p>

    {/* ✅ Resume Download — now BELOW the about text ✅ */}
    <div className="mt-6">
      <ResumeDownload />
    </div>
  </div>
  
</div>
    </section>
  );
};

// Typewriter (no changes)
const TypewriterText = ({ lines }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);

  React.useEffect(() => {
    const currentLine = lines[loopNum % lines.length];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseDelay = 1800;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentLine.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(prev => prev + 1);
        }
      } else {
        setDisplayText(currentLine.substring(0, displayText.length + 1));
        if (displayText === currentLine) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, lines]);

  return (
    <span className="relative inline-block">
      <span className="text-blue-200 font-bold">{displayText}</span>
      <span
        className={`absolute right-0 top-[0.35em] w-0.5 h-5 bg-blue-300 animate-pulse ${
          isDeleting ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      ></span>
    </span>
  );
};

export default HeroSection;


