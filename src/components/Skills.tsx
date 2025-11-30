'use client';

export default function Skills() {
  const skills = [
    { name: 'MongoDB', icon: '🍃', level: 65 },
    { name: 'Express.js', icon: '⚡', level: 75 },
    { name: 'React.js', icon: '⚛️', level: 92 },
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'JavaScript', icon: '📜', level: 93 },
    { name: 'TypeScript', icon: '📘', level: 60 },
    { name: 'Next.js', icon: '▲', level: 50 },
    { name: 'REST APIs', icon: '🔌', level: 80 },
    { name: 'Git & GitHub', icon: '🔀', level: 82 },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">
          My Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-300">MERN Stack Expertise</h3>
          <div className="flex justify-center gap-4 text-4xl mb-8">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">M</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">E</span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">R</span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">N</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{skill.name}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-2 text-sm text-slate-600 dark:text-slate-400">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

