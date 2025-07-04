import { Link, NavLink } from 'react-router-dom';
import s from './Nav.module.scss';
import { useBurger } from '../../store/useBurger';
import Burger from '../Burger/Burger';

const links = [
   {
      id: 1,
      text: "Home",
      to: "/",
   },
   {
      id: 2,
      text: "About Me",
      to: "/about_me",
   },
   {
      id: 3,
      text: "Services",
      to: "/services",
   },
   {
      id: 4,
      text: "Blog",
      to: "/blog",
   },
   {
      id: 5,
      text: "Contact Me",
      to: "/contact_me",
   },
   {
      id: 6,
      text: "Admin",
      to: "/admin",
   },
]

const Nav = () => {

   const { toggleBurger } = useBurger();

  return <nav className={s.nav}>
   <Burger links={links}/>
   <Link className={s.logo} to={"/"}>
      <img className={s.logoImg} src="/logo.svg" alt="logo.svg" />

      <h2 className={s.ttl}>AeroVision</h2>
   </Link>

   <div className={s.container}>
      <ul className={s.links}>
         {links.map((link) => (
            <li key={link.id} className={s.li}>
               <NavLink className={s.link} to={link.to}>
                  {link.text}
               </NavLink>
            </li>
         ))}
      </ul>
      
      <Link className={s.btn} to={"/"}>
         Let's Chat
      </Link>

   </div>

   <img
        className={s.burger}
        src="/burger.svg"
        alt="menu"
        loading="lazy"
        onClick={toggleBurger}/>
  </nav>;

};

export default Nav;
