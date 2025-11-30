export interface Experience {
  title: string;
  description: string[];  
  tech: string[];
  company: string;
  location: string;
  duration: string;
}


export const experiences: Experience[] = [
  {
    title: 'Junior MERN Stack Developer',
    company: 'Weetech Solution pvt. ltd.',
    location: 'OnSite',
    duration: '2024 - Present',
    description: [
      'Developed and maintained full-stack web applications using MongoDB, Express, React, and Node.js',
      'Led a team of 4 developers in building scalable e-commerce platforms',
      'Implemented RESTful APIs and microservices architecture',
      'Optimized application performance resulting in 40% improvement in load times'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript']
  },
  {
    title: 'Frontend Developer',
    company: 'Weetech Solutions Ltd.',
    location: 'OnSite',
    duration: '2024 - 2025',
    description: [
      'Built responsive, Scalable and Modern web applications using React and Tailwind Css and framer-motion',
      'Collaborated with cross-functional teams to deliver high-quality software',
      'Implemented user authentication and authorization systems',
      'Worked closely with designers to create pixel-perfect UI components'

    ],
    tech: ['React', 'Redux-Toolkit', 'Tailwind css', 'JavaScript', 'Git', ]
  },
  // {
  //   title: 'Junior Web Developer',
  //   company: 'StartupXYZ',
  //   location: 'San Francisco, CA',
  //   duration: '2019 - 2020',
  //   description: [
  //     'Developed frontend components using React',
  //     'Assisted in backend development with Node.js and Express',
  //     'Participated in code reviews and team meetings',
  //     'Learned best practices in software development'
  //   ],
  //   tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'CSS', 'HTML']
  // }
];

