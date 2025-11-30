export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I'm a dedicated <strong className="text-slate-800 dark:text-slate-200">Frontend Developer</strong> with strong experience
              in modern UI development using React, Next.js, Tailwind CSS, and component-driven design. I love creating
              clean, responsive, and high-performance user interfaces that deliver great user experiences.
            </p>
            <p>
              Along with frontend expertise, I also work as a <strong className="text-slate-800 dark:text-slate-200">MERN Stack Developer</strong>,
              which helps me understand backend workflows, APIs, and full-stack application structure. This gives me the
              ability to build complete solutions while keeping frontend quality at the center.
            </p>
            <p>
              My journey in web development started with curiosity about how UI works, and today I focus on building
              pixel-perfect designs, animations, and smooth interactions. I enjoy learning new tools, improving performance,
              and delivering visually appealing digital experiences.
            </p>

          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12+</div>
                <div className="text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1.4+</div>
                <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              {/* <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
                <div className="text-slate-600 dark:text-slate-400">GitHub Commits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">20+</div>
                <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

