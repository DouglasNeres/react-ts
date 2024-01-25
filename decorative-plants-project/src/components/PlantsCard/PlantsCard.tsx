import Image from "next/image";
import styles from "./PlantsCard.module.css";
import Plant1 from "../assets/plant1.svg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const PlantsCard = () => {
  return (
    <div className={styles.plantscard}>
      <Image
        draggable="false"
        src={Plant1}
        alt="Imagem de planta sobre decoração"
      />
      <div className={styles.textsCard}>
        <h1>Peperomia Houseplant</h1>
        <p>
          This plant is a smart choice for the beginning houseplant enthusiast.
        </p>
        <Link href={"/"}>
          Read more <MoveRight />
        </Link>
      </div>
    </div>
  );
};
