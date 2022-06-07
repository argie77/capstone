import styles from "../styles/PastaList.module.css";
import styles from "./PastaCard";


const PastaList = ({ pastaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> THE BEST ITALIAN PASTA IN NEW YORK</h1>
      <p className={styles.desc}>
        hello
      </p>
      <div classsName={styles.wrapper}>
        {pastaList.map((pizaa) => (
          <PataCard key={pasta._id} pizza={pizza} />
        )
        )}
      </div>
      </div>
  )
}

export default PastaList