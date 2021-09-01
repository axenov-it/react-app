import styles from "./styles.module.scss";
import Item from "./Item";

const Menu = () => (
  <ul className={styles.menu}>
    <Item title="Home" to="/" />
    <Item title="Create company" to="/react-form" />
    <Item title="Test fetch" to="/test-fetch" />
  </ul>
);

export default Menu;
