import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0)
    //creating a slide for the homepage
    const images = [
        "/img/download.jpeg",
         "/img/photo-1579684947550-22e945225d9a.avif",
         "/img/photo-1551183053-bf91a1d81141.avif",
         
    ];

    const handleArrow = (direction) =>{
        // the slide will start from the 1st picture and end on the 3rd picture
        if(direction==="r"){
            setIndex(index !== 0? index-1 :2)
        }
        // the slide will have to go back from the 1st picture
        if(direction==="l"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    //Mapping the slide 
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")} > 
        <Image src="/img/585e46c3cb11b227491c3377.png" layout="fill" alt="" objectfit="contain" />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img, i) => (
        <div className={styles.imgContainer} key={i}>
                <Image src={img} alt="" layout="fill" objectfit="contain" />
        </div>
            ))}
        </div>
        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}> 
        <Image src="/img/585e46b9cb11b227491c3376.png" layout="fill" alt="" objectit="contain" />
        </div>
        </div>
  )
}

export default Featured