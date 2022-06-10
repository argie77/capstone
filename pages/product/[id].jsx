import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  //useState is use to get the 1st price and the 2nd price
  //const [size, setSize] = useState(0);
const pasta = {
    id:1,
    img: "/img/photo-1616299908398-9af1134ad522.avif",
    name: "Penne Pasta",
    price: [14.99, 19.99],
    desc: "hello"
}

  return (
      <div className={styles.container}> 
      <div className={styles.left}>
      <div className={styles.imgContainer}>
      <Image src={pasta.img} obejectfit="contain" layout="fill" alt="" />
      </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pasta.name}</h1>
        {/* <span className={styles.price}>${pasta.price[size]}</span>
        // <p className={styles.desc}>{pasta.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3> */}
      </div>
        </div>
  )
}

export default Product