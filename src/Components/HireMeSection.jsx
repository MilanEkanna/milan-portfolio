import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrueFocus from './TrueFocus';
import ScrambledText from './ScrambledText ';
 // Add import if you create this

const HireMeSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName') || 'Anonymous';
    const email = formData.get('email') || '';
    const role = formData.get('role') || '';
    const projectType = formData.get('projectType') || 'Not specified';
    const message = formData.get('message') || '';

    const subject = `Hire Inquiry – ${projectType}`;

    const body = `Hi Milan,

I'm reaching out regarding a potential opportunity.

• Name: ${fullName}
• Email: ${email}
• Role / Company: ${role}
• Project Type: ${projectType}

• Message:
${message}

Best regards,
${fullName}
`;

    const mailtoLink = `mailto:milanmekanna@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-8 mb-16">
      {/* Header */}
      <div className="text-center mb-12 font-serif">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <TrueFocus
            sentence="Let's Build something Amazing"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
        </h1>
        <div className="w-96 h-1 bg-[#452829] mx-auto "></div>

        {/* Scrambled Text Section */}
        <div className="max-w-3xl mx-auto mb-6 break-normal whitespace-normal">
  <ScrambledText
    className="text-xl scrambled-text-demo text-left mt-6 break-normal  whitespace-normal"
    radius={100}
    duration={1.2}
    speed={0.5}
    scrambleChars='.:'
  >
    I’m open to freelance, contract, and full-time remote | on-site opportunities. 
    Let’s discuss how I can bring value to your team or project.
  </ScrambledText>
</div>
      </div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex p-4  ">
          {/* Left Side - Info */}
          <div className=" rounded-xl md:w-1/3 bg-gradient-to-br from-[#452829] to-[#2A1813] p-10 text-[#FBF3D1] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Hire Me?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#FBF3D1]/70 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-Stack MERN developer with 1.7+ years of production experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#FBF3D1]/70 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>WCAG-compliant & accessible (a11y) web development specialist</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#FBF3D1]/70 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strong focus on performance, clean code, and maintainability</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#FBF3D1]/70 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast, reliable communication & on-time delivery of projects</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FBF3D1]/20">
              <h3 className="text-lg font-semibold mb-2">Quick Contact</h3>
              <p className="text-[#FBF3D1] mb-1">📧 milanmekanna@gmail.com</p>
              <p className="text-[#FBF3D1] mb-1">📞+91-639 7757 813</p>
              <Link to="/faq">
                <p className="text-blue-600 mb-1">See More FAQ...</p>
              </Link>
              <p className="text-sm text-[#FBF3D1]/70">I aim to respond within 24 hours.</p>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="md:w-2/3 p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Milan Ekanna"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#452829] focus:border-[#452829]"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="milan@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#452829] focus:border-[#452829]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Role / Company
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    placeholder="CTO @ StartupXYZ"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#452829] focus:border-[#452829]"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#452829] focus:border-[#452829] bg-white"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="fulltime">Full-Time Role</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="contract">Contract (3+ months)</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell Me About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="e.g., We need a responsive, accessible MERN app with real-time features using WebSockets/MQTT..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#452829] focus:border-[#452829]"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#452829] hover:bg-[#3B060A] text-[#FBF3D1] font-medium rounded-lg shadow-sm 
                    transition duration-300 border-2 border-transparent hover:border-[#FBF3D1]"
                >
                  Send Enquiry
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  I respect your privacy — your data will never be shared.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;