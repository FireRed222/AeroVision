import { useState } from 'react';
import s from './Projects.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      ttl: 'All',
      info: [
        {
          id: 1,
          src: '/preview1.svg',
        },
        {
          id: 2,
          src: '/preview3.svg',
        },
        {
          id: 3,
          src: '/preview2.svg',
        },
        {
          id: 4,
          src: '/preview4.svg',
        },
        {
          id: 5,
          src: '/preview5.svg',
        },
        {
          id: 6,
          src: '/preview6.svg',
        },
      ],
    },
    {
      id: 2,
      ttl: 'UI/UX Design',
      info: [
        {
          id: 1,
          src: '/preview2.svg',
        },
        {
          id: 2,
          src: '/preview4.svg',
        },
        {
          id: 3,
          src: '/preview1.svg',
        },
        {
          id: 4,
          src: '/preview5.svg',
        },
        {
          id: 5,
          src: '/preview6.svg',
        },
        {
          id: 6,
          src: '/preview3.svg',
        },
      ],
    },
    {
      id: 3,
      ttl: 'Branding Design',
      info: [
        {
          id: 1,
          src: '/preview5.svg',
        },
        {
          id: 2,
          src: '/preview4.svg',
        },
        {
          id: 3,
          src: '/preview1.svg',
        },
        {
          id: 4,
          src: '/preview3.svg',
        },
        {
          id: 5,
          src: '/preview6.svg',
        },
        {
          id: 6,
          src: '/preview2.svg',
        },
      ],
    },
    {
      id: 4,
      ttl: 'Wordpress',
      info: [
        {
          id: 1,
          src: '/preview6.svg',
        },
        {
          id: 2,
          src: '/preview5.svg',
        },
        {
          id: 3,
          src: '/preview4.svg',
        },
        {
          id: 4,
          src: '/preview3.svg',
        },
        {
          id: 5,
          src: '/preview2.svg',
        },
        {
          id: 6,
          src: '/preview1.svg',
        },
      ],
    },
  ];

  const [num, setNum] = useState(1);

  const filterProject = projectData.find((data) => data.id === num);

  return (
    <section className={s.ourProjects}>
      <div className={s.container}>
        <div className={s.info}>
          <h2 className={s.ttl}>Our projects</h2>
          <h1 className={s.subttl}>
            Presenting My Design Portfolio and Case Studies
          </h1>
        </div>

        <nav className={s.btns}>
          {projectData.map((info) => (
            <button
              type="button"
              key={info.id}
              onClick={() => setNum(info.id)}
              className={s.btn}
            >
              {info.ttl}
            </button>
          ))}
        </nav>
        <AnimatePresence mode="wait">
          {filterProject && (
            <motion.div className={s.projects} key={filterProject.id}>
              {filterProject.info.map((infa, index) => (
                <motion.div
                  key={infa.id}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.3 } },
                    hidden: {},
                  }}
                >
                  <motion.div
                    className={s.blur}
                    initial={{ opacity: 0, backdropFilter: 'blur(0)' }}
                    whileHover={{
                      opacity: 1,
                      backdropFilter: 'blur(2px)',
                      transition: { duration: 0.5, ease: 'easeInOut' },
                    }}
                    whileTap={{
                      opacity: 1,
                      backdropFilter: 'blur(2px)',
                      transition: { duration: 0.5, ease: 'easeInOut' },
                    }}
                  >
                    <h1 className={s.blurTtl}>SEE FULL</h1>
                  </motion.div>
                  <motion.img
                    className={s.img}
                    src={infa.src}
                    alt={infa.src}
                    custom={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: i * 0.3,
                          duration: 0.5,
                        },
                      }),
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
