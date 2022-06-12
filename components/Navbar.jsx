import Image from "next/image"
import styles from "..//styles/Navbar.module.css"
import { useSelector } from "react-redux"
import Link from "next/link"

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}> 
        <Image src="/img/telephone.svg" alt="" width="32" height="32" />
      </div>
      <div className={styles.texts}>
      <div className={styles.text}>Order Now</div>
      <div className={styles.text}>718-650-7890</div>

       </div>
      </div>
      <div className={styles.item}>
       <ul className={styles.list}>
         <Image src="/img/61194acbf8fe340004e0d2cf.png" alt="" width="140px" height="80x" />
         <li className={styles.listItem}>Homepage</li>
         <li className={styles.listItem}>Products</li>
         <li className={styles.listItem}>Menu</li>
         <li className={styles.listItem}>Contacts</li>
         </ul>
        </div>
        <Link href="/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}> 
        <Image src="/img/59bedb1e7a216d0b052f128b.png" alt="" width="40px" height="40px" />
        <div className={styles.counter}>{quantity}</div>
        </div>
        </div>
        </Link>
      </div>
  )
}

export default Navbar