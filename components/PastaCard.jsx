import Image from "next/image";
import styles from "../styles/PastaCard.module.css";

const PastaCard = (pasta) => {
  return (
    <div className={styles.container}>
        <Image src={pasta.img} alt="" width="500" height="500" />
        <h1 className={styles.title}>{pasta.title}</h1>
      <span className={styles.price}>${pasta.prices[0]}</span>
      <p className={styles.desc}>
      {pasta.desc}
      </p>
    </div>
  )
}



export default PastaCard