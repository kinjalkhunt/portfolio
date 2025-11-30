'use client';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            👋 Welcome to my Portfolio
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kailash P Khunt</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-slate-800 dark:text-slate-200 animate-fade-in-up-delay">
          Frontend Developer (React.js)
          {/* <br></br> */}
        </h2>
        <div className="p-2 text-xl">(Full-Stack Knowledge: MERN)</div>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          Frontend Developer with strong expertise in React.js, JavaScript, HTML, CSS, and modern UI frameworks. Skilled in creating responsive, optimized, and interactive user interfaces. Experience working with REST APIs and integrating backend services. Also familiar with MERN stack, giving a deeper understanding of full-stack workflow.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up-delay-3">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg font-semibold border-2 border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
        <div className="mt-16 flex justify-center gap-6 animate-fade-in-up-delay-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <span className="sr-only">GitHub</span>📱
          </a>
          <a href="https://www.linkedin.com/in/kinjal-khunt-4a87b5304/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <span className="sr-only">LinkedIn</span>💼
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kinjalpkhunt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ✉️
          </a>


        </div>
      </div>
    </section>
  );
}

