import Image from "next/image";
import styles from "../styles/PastaCard.module.css";

const PastaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="img/photo-1616299908398-9af1134ad522.avif" alt="" width="500" height="500" />
        <h1 className={styles.title}>Pasta of the day!</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        hi
      </p>
    </div>
  )
}



export default PastaCard