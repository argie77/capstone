import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {

    //creating a slide for the homepage
    const images = [
        "/img/photo-1551183053-bf91a1d81141.avif",
        // "img/photo-1579684947550-22e945225d9a.avif",
        // "img/photo-1579684947550-22e945225d9a.avif",
    ];
    //Mapping the slide 
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{right:0}}> 
        <Image src="/img/71-714874_right-arrow-png-picture-icon-right-arrow-png.png" alt="" layout="fill"/>
        </div>

        <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            {images.map((img, i) => (
                <Image src={img} key={i} alt="" width="1200px" height="700px" />
            ))}
        </div>
        </div>
        <div className={styles.arrowContainer} style={{left:0}}> 
        <Image src="/img/111-1119167_left-arrow-png-icon-left-arrow-png-transparent.png" alt="" layout="fill" />
        </div>
        </div>
  )
}

export default Featured