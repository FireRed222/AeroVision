import { Link, NavLink } from "react-router-dom";
import s from "./Burger.module.scss";
import { useBurger } from "../../store/useBurger";

interface LinkType {
  id: number;
  text: string;
  to: string;
}

interface BurgerProps {
  links: LinkType[];
}

const Burger = ({ links }: BurgerProps) => {
  const { isBurger, toggleBurger } = useBurger();

  return (
    <div
      className={`${s.burger} ${isBurger && s.active}`}
      onClick={toggleBurger}
    >
      <div className={s.container} onClick={(e) => e.stopPropagation()}>
        <img
          className={s.img}
          src="/close.svg"
          alt="close"
          loading="lazy"
          onClick={toggleBurger}
        />

        <ul className={s.links}>
          {links.map((link) => (
            <li key={link.id} className={s.li}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.active}` : s.link
                }
                to={link.to}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link className={s.btn} to={"/"}>
          Let’s chat
        </Link>
      </div>
    </div>
  );
};

export default Burger;
  