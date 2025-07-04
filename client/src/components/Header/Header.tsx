import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.block}>
        <div className={s.info}>
          <h2 className={s.ttl}>Welcome to my Portfolio</h2>
          <h1 className={s.subttl}>Hi I’m <span className={s.name}>Robert Junior</span>  Product Designer</h1>
          <p className={s.text}>Collaborating with highly skilled individuals, our agency delivers top-quality services.</p>
        </div>

        <div className={s.btns}>
          <Link className={s.link} to={"/contact_me"}>Hire Me!</Link>

          <a className={s.download} href="/cv.png" download>Download CV <img src="/download.svg" alt="" /></a>
        </div>
      </div>
      <img className={s.man} src="/man.jpg" alt="man" />
    </header>
  );
};

export default Header;
