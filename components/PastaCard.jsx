import Image from "next/image";
import styles from "../styles/PastaCard.module.css";
import Link from "next/link";

const PastaCard = ({ pasta }) => {
  return (
    //need passHref to pass link href 
    <div className={styles.container} passHref>
      <Link href={`/product/${pasta._id}`}>
        <Image src={pasta.img} alt="" width="500" height="500" />
        </Link>
        <h1 className={styles.title}>{pasta.title}</h1>
      <span className={styles.price}>${pasta.prices[0]}</span>
      <p className={styles.desc}>{pasta.desc}
      </p>
    </div>
  )
}



export default PastaCard