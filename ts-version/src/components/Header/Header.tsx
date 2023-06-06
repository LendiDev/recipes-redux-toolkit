import { BsFillHeartFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavourites } from "../../hooks/useFavourites";

const Header = () => {
  const { favourites } = useFavourites();

  return (
    <header className={styles.header}>
      <BsFillHeartFill />
      <span>{favourites.length}</span>
    </header>
  );
};

export default Header;
