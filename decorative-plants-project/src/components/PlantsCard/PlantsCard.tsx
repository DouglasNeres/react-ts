import Image from "next/image";
import styles from "./PlantsCard.module.css";
import Plant1 from "../../assets/plant1.svg";
import Plant from "../../assets/plant.svg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface PlantsModel {
  modelPlant: "peperomiaModel" | "crassulaModel";
}

export const PlantsCard = ({ modelPlant }: PlantsModel) => {
  return (
    <>
      {modelPlant == "peperomiaModel" ? (
        <div className={styles.peperomiaCard}>
          <Image
            draggable="false"
            src={Plant1}
            alt="Imagem de planta sobre decoração"
          />
          <div className={styles.textsCard}>
            <h1>Peperomia Houseplant</h1>
            <p>
              This plant is a smart choice for the beginning houseplant
              enthusiast.
            </p>
            <Link href={"/"}>
              Read more <MoveRight />
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.crassulaCard}>
          <Image
            draggable="false"
            src={Plant}
            alt="Imagem de planta sobre decoração"
          />
          <div className={styles.textsCard}>
            <h1>Crassula Houseplant</h1>
          </div>
        </div>
      )}
    </>
  );
};
