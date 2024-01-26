import { PlantsCard } from "@/components/PlantsCard/PlantsCard";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";

import Plant1 from "../assets/plant1.svg";
import Plant from "../assets/plant.svg";

const plantsCard = [
  {
    image: Plant1,
    title: "Peperomia Houseplant",
    paragraph:
      "This plant is a smart choice for the beginning houseplant enthusiast.",
  },
  {
    image: Plant,
    title: "Crassula Houseplant",
    paragraph:
      "The Crassula Houseplant is an excellent selection for those new to indoor gardening.",
  },
];

export default function Home() {
  return (
    <div className={styles.contentMain}>
      <Navbar />
      <div className={styles.generalContent}>
        <div className={styles.contentTexts}>
          <h1>The World of Decorative Plants</h1>
          <p>
            Discover more thant 100 Indoor plants for the Small-Space Gardener,
            and How to Care for Them Your home will be a plant paradise before
            you know it.
          </p>
          <button>Checkout Products</button>
        </div>
        <div className={styles.cards}>
          <PlantsCard modelPlant="peperomiaModel" />
          <PlantsCard modelPlant="crassulaModel" />
        </div>
      </div>
    </div>
  );
}
