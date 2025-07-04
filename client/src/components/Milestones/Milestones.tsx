import {
  animate,
  AnimatePresence,
  motion,
  spring,
  useInView,
  useMotionValue,
} from 'framer-motion';
import s from './Milestones.module.scss';
import { useEffect, useRef, useState } from 'react';

const Milestones = () => {
  const milestonesInfo = [
    {
      id: 1,
      value: 8300,
      type: '+',
      text: 'Figma ipsum component variant main layer. Hand.',
    },
    {
      id: 2,
      value: 100,
      type: '%',
      text: 'Figma ipsum component variant main layer. Union.',
    },
    {
      id: 3,
      value: 3500,
      type: '+',
      text: 'Figma ipsum component variant main layer.',
    },
    {
      id: 4,
      value: 240,
      type: '+',
      text: 'Figma ipsum component variant main layer.',
    },
  ];

  const container = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        type: spring,
      },
    },
  };

  const listItem = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: spring,
        //   duration: 0.8,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValues, setDisplayValues] = useState(
    milestonesInfo.map(() => 0)
  );

  const motionValues = milestonesInfo.map(() => useMotionValue(0));

  useEffect(() => {
    if (!isInView) return;

    const animations = motionValues.map((mv, i) =>
      animate(mv, milestonesInfo[i].value, {
        duration: 3,
        onUpdate: (latest) => {
          setDisplayValues((prev) => {
            const copy = [...prev];
            copy[i] = Math.round(latest);
            return copy;
          });
        },
      })
    );

    return () => animations.forEach((a) => a.stop());
  }, [isInView]);

  return (
    <section className={s.milestones}>
      <div className={s.text}>
        <h2 className={s.ttl}>Our Milestones</h2>
        <h1 className={s.subttl}>
          What sets our studio apart for your projects?
        </h1>
      </div>
      <div className={s.container}>
        <AnimatePresence mode="wait">
          {milestonesInfo && (
            <motion.div
              className={s.cardContainer}
              variants={container}
              initial="hidden"
              whileInView={'show'}
            >
              {milestonesInfo.map((card, i) => (
                <motion.div
                  className={s.card}
                  key={card.id}
                  variants={listItem}
                  ref={ref}
                >
                  <motion.h1 variants={listItem} className={s.cardValue}>
                    {displayValues[i]}
                    {card.type}
                  </motion.h1>
                  <motion.h2 variants={listItem} className={s.cardText}>
                    {card.text}
                  </motion.h2>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Milestones;
