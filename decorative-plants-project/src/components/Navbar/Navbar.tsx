import Image from "next/image";
import Logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src={Logo} alt="Logo Kreed" />
      <div className={styles.navTexts}>
        <ul>
          <li>Home</li>
          <li>Plant Room</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};
