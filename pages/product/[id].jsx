import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";


const Product = ({ pasta }) => {
  //useState is use to get the 1st price and the 2nd price
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  //this is for the cart
  const handleClick = () => {
    dispatch(addProduct({...pasta.price, quantity}));
  }

// the data is not showing 
  return (
      <div className={styles.container}> 
      <div className={styles.left}>
      <div className={styles.imgContainer}>
        <Image src={pasta.img} objectfit="contain" layout="fill" alt="" />
      </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pasta.title}</h1>
        <span className={styles.price}>${pasta.prices[size]}</span>
         <p className={styles.desc}>{pasta.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
        <div className={styles.size} onClick={()=>setSize(0)}> 
          <span className={styles.number}> Regular</span>
        </div>
        <div className={styles.size} onClick={()=>setSize(1)}>
          <span className={styles.number}> Party Tray</span>
        </div>
        </div>
        <div className={styles.add}>
          <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
        </div>
  )
}

//In nextJs this is how we fetch data because we are using server site rendering not the client side
export const getServerSideProps = async ({ params }) => {
  //using this for our props
const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
return {
  props: {
    pasta: res.data,
  }
}
}


export default Product