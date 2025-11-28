import React, { useEffect } from 'react';


const FaqSection = () => {
      useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                
            });
        }, []);
  const faqs = [
    {
      question: 'Do you work on accessibility (a11y) and WCAG compliance ?',
      answer: 'Yes! Accessibility is a core part of my development process. I ensure all projects meet WCAG 2.1 AA standards — semantic HTML, keyboard navigation, screen reader support, color contrast, and ARIA where needed.',
    },
    {
      question: 'What tech stack do you specialize in ?',
      answer: 'I’m a full-stack JavaScript/TypeScript developer: MERN (MongoDB, Express, React, Node), Next.js, and REST APIs. I also build accessible WordPress sites and custom canva templates. My Tech Stack Includes  Next.Js | Typescript | React.JS | Node.Js | Express.Js | Web-sockets | MQTT Protocol | RTK Query| Redux | Zustand | Recoil | Tailwind | MongoDB | SQL Server | PostgreSQL | AWS (Basics) | Canva'
    },
    {
      question: 'Are you available for freelance or remote full-time roles ?',
      answer: 'Absolutely. I’m open to freelance projects, short-term contracts (3+ months), and full-time remote positions — especially with teams that value clean code, My Stack Knowledge and maintainable architecture.',
    },
    {
      question: 'How do you handle communication and project timelines ?',
      answer: 'I prioritize clear, timely communication via email, Slack, or Zoom. I use Agile practices — weekly syncs, shared Trello/Notion boards, and GitHub for transparency. I commit only to realistic deadlines and always deliver on time.',
    },
    {
      question: 'Do you offer Microsrvices architecture ?',
      answer: 'Yes — I design and implement microservices-based architectures as part of scalable, maintainable full-stack solutions.',
    },
    {
      question: 'What is your approach in Microservices architecture ?',
      answer: '✅ Service Decomposition Break monoliths (or greenfield apps) into domain-aligned services (e.g., Auth, Payments, Notifications). Use bounded contexts (DDD principles) to define clean service boundaries.',
    },
    {
      question: 'Where are you based, and what are your working hours ?',
      answer: 'I’m based in Greater Noida (U.P.), India (IST). My typical working hours are 9 AM–6 PM, but I’m flexible for overlapping time with EU, UK, or US East Coast teams.',
    },
  ];

  return (
    <section className="py-4 " id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-amber-500 pl-2 pr-3">
              {/* Question */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-800 font-semibold">
                    {index + 1}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
              </div>

              {/* Answer */}
              <div className="mt-4 ml-12">
                <div className="bg-[#452829] border border-amber-200 rounded-lg p-4 sm:p-5">
                  <p className="text-amber-100">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;