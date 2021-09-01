import {
  useLocation,
  useRouteMatch,
  useHistory,
  useParams,
} from "react-router-dom";
import { Menu } from "./components";

import styles from "theme/main.module.scss";

const Header = () => {
  console.log("*****************");
  console.log(window.location.origin);
  console.log(useLocation());
  console.log(useRouteMatch());
  console.log(useHistory());
  console.log(useParams());
  return (
    <div className={styles.app__header}>
      <Menu />
    </div>
  );
};

export default Header;
