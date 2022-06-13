//import styles from "..styles/PastaList.module.css";
import PastaCard from "./PastaCard";
//this page is showing up with Ray's help(forgot to put the / in frongt of styles)
import styles from "../styles/PastaList.module.css";

const PastaList = ({ pastaList }) => {
    return (
    
//mapping fixed because the function is define in page index.
    <div className = {styles.container}>
       <h1 className={styles.title}> THE BEST ITALIAN PASTA IN NEW YORK</h1>
       <p className={styles.desc}>
       Come and enjoy savory Italian cuisine in an upscale dining atmosphere.
      </p>
       <div classsName={styles.wrapper}>
       {/* {pastaList.map((pasta) => (
          <PastaCard key={pasta._id} pasta={pasta} />
        ))} */}
        </div>
        </div>
    )
  }
  

export default PastaList