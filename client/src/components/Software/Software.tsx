import s from "./Software.module.scss";

const Software = () => {
  let softwareImages = [
    {
      id: 1,
      src: "/jquery.png",
    },
    {
      id: 2,
      src: "/wordpress.png",
    },
    {
      id: 3,
      src: "/less.png",
    },
    {
      id: 4,
      src: "/sass.png",
    },
    {
      id: 5,
      src: "/spotify.png",
    },
  ];

  return (
    <section className={s.software}>
      <div className={s.container}>
         {softwareImages.map((soft) => (
            <img key={soft.id} src={soft.src} alt={soft.src} className={s.img}/>
         ))}
      </div>
    </section>
  );
};

export default Software;
