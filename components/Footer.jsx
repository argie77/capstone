import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}> 
    <div className={styles.item}> 
        <Image src="/img/DSC_0459-scaled.jpeg" layout="fill" alt="" />
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
        Motto: 
        <br /> The thing about pasta is that it can be remarkably fancy and aesthetic. That’s why many people love capturing its sublime profile and memorializing it online.
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Location</h1>
        <p className={styles.text}>
          1234 54th Street 
          <br /> New York, NY 12345
          <br /> 718-650-7890
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Working Hours</h1>
        <p className={styles.text}>
          Monday - Sunday
          <br /> 3pm - 10pm
        </p>
      </div>
        </div>
    </div>
  )
}

export default Footer