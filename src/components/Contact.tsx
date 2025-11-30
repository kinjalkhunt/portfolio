'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-slate-200">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-700 rounded-lg border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors text-slate-800 dark:text-slate-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-700 rounded-lg border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors text-slate-800 dark:text-slate-200"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-700 rounded-lg border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors text-slate-800 dark:text-slate-200"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-700 rounded-lg border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors resize-none text-slate-800 dark:text-slate-200"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <a href="mailto:kinjal@example.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ✉️ kinjalpkhunt@gmail.com
          </a>
          <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            📞 +91 7567665583
          </a>
        </div>
      </div>
    </section>
  );
}

