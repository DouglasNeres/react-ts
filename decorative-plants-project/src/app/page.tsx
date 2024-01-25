import { PlantsCard } from "@/components/PlantsCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.contentMain}>
      <PlantsCard />
    </div>
  );
}
