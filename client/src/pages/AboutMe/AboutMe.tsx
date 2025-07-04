import { useState } from "react";
import s from "./AboutMe.module.scss";

const skills = [
  {
    id: 1,
    ttl: "Main Skills",
    info: [
      {
        id: 1,
        text: "User Experience Design - UI/UX",
        width: "95%",
      },
      {
        id: 2,
        text: "Web & User Interface Design - Development",
        width: "90%",
      },
      {
        id: 3,
        text: "Interaction Design - Animation",
        width: "80%",
      },
    ],
  },
  {
    id: 2,
    ttl: "Awards",
    info: [
      {
        id: 1,
        text: "Nobel Prize",
        width: "56%",
      },
      {
        id: 2,
        text: "Microsoft Computer Literacy Test",
        width: "39%",
      },
      {
        id: 3,
        text: "Spelling Bee",
        width: "87%",
      },
    ],
  },
  {
    id: 3,
    ttl: "Education",
    info: [
      {
        id: 1,
        text: "Hustlers University",
        width: "99%",
      },
      {
        id: 2,
        text: "Rizz High School",
        width: "12%",
      },
      {
        id: 3,
        text: "John Pork Academy",
        width: "47%",
      },
    ],
  },
];

const AboutMe = () => {
  const [num, setNum] = useState(1);

  const filterSkills = skills.find((skill) => skill.id === num);

  return (
    <section className={s.aboutMe}>
      <img src="/man2.svg" alt="" className={s.man} />
      <img src="/x.png" alt="" className={s.x}/>

      <div className={s.container}>
        <div className={s.info}>
          <h3 className={s.ttl}>About Me</h3>
          <h2 className={s.subttl}>
            20 Year’s Experience<p className={s.bold}>on Product Design</p>
          </h2>
          <p className={s.text}>
            Hello there! I'm <span className={s.bold}>Robert Junior.</span> I
            specialize in web design and development, and I'm deeply passionate
            and committed to my craft. With 
            <span className={s.bold}> 20 years</span> of experience as a
            professional graphic designer
          </p>
        </div>

        <div className={s.skills}>
          <div className={s.category}>
            {skills.map((skill) => (
              <button
                type="button"
                className={`${s.btn} ${num === skill.id ? s.btn_active : ""}`}
                key={skill.id}
                onClick={() => (
                  setNum(skill.id)
                )}
              >
                {skill.ttl}
              </button>
            ))}
          </div>

          <div className={s.level}>
            {!!filterSkills &&
            filterSkills.info.map((skill) => (
              <div key={skill.id} className={s.sublevel}>
                <h3 className={s.name}>{skill.text}</h3>

                <div className={s.line}>
                  <div
                    className={s.subline}
                    style={{ width: skill.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
