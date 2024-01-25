import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.contentMain}>
      <Navbar />
      <div className={styles.contentTexts}>
        <h1>The World of Decorative Plants</h1>
        <p>
          Discover more thant 100 Indoor plants for the Small-Space Gardener,
          and How to Care for Them Your home will be a plant paradise before you
          know it.
        </p>
        <button>Checkout Products</button>
      </div>
    </div>
  );
}
