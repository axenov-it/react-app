import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  to: string;
}

const Item = ({ title, to }: Props) => (
  <li className={styles.menu__item}>
    <NavLink
      exact
      activeClassName={styles.menu__link_active}
      className={styles.menu__link}
      to={to}
    >
      {title}
    </NavLink>
  </li>
);

export default Item;
