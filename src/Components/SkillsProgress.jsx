import React from 'react'

const SkillsProgress = () => {
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
  return (
    <div className=" flex flex-col items-center gap-3 p-16 pb-8 pt-2 mt-16 ">
         <h4 className=" text-3xl font-serif font-semibold text-[#452829] mb-8">
          <span >My Expertise</span>
          
        </h4>
        
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
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
  )
}

export default SkillsProgress