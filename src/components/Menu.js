import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu">
                <NavLink  to="/drift"   className={({ isActive }) =>
              isActive ? "menu__item-active": "menu__item"}>Дрифт-такси</NavLink>
                <NavLink to="/forza"  className={({ isActive }) =>
              isActive ? "menu__item-active": "menu__item"}>Forza Karting Sochi</NavLink>
                <NavLink to="/timeattack"  className={({ isActive }) =>
              isActive ? "menu__item-active": "menu__item"}>Гонка ​​​​​​Time Attack</NavLink>
        </nav>
    );
  }