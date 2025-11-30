export interface Project {
  title: string;
  description: string[];  
  tech: string[];
  github: string;
  demo: string;
  image: string;
}


export const projects: Project[] = [
  {
    title: 'Scolage (Frontend Developer)',
    description: [
      'Built fully responsive UI using React.js & Tailwind CSS.',
      'Integrated REST APIs and implemented real-time dashboards.',
      'Implemented routing & global state using Redux Toolkit.'
    ],
    tech: ['React', 'Redux-toolkit', 'Socket.io', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: '/project1.png'
  },

  {
  title: 'Radheva Jewels (Frontend Developer)',
  description: [
    'Built modern e-commerce UI using React, Tailwind & Redux',
    'Implemented dark/light mode & animations using Framer Motion',
    'Developed responsive layouts for mobile + desktop'
  ],
  tech: ['React', 'Redux Toolkit', 'Framer Motion', 'Tailwind CSS'],
  github: '#',
  demo: '#',
  image: '/project1.png'
},

  {
    title: 'NPJ Jewels / Ikisha Jewels (Frontend Developer)',
    description: ['Built responsive product pages and optimized UI performance.'],
    tech: ['React', 'Redux-toolkit', 'Socket.io', 'Tailwind CSS'],

    github: '#',
    demo: '#',
    image: '/project1.png'
  },
  {
    title: 'Portfolio Website (Next + Tailwind)',
    description: ['Personal portfolio showcasing projects & experience.Fully responsive and optimized design.'],
    tech: ['Next.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: '/project1.png'
  }
];

