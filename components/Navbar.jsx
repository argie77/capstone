import Image from "next/image"
import styles from "..//styles/Navbar.module.css"

const Navbar = () => {
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
         <li className={styles.listItem}>Homepage</li>
         <li className={styles.listItem}>Products</li>
         <li className={styles.listItem}>Menu</li>
         <Image src="/img/pasta-logo-hand-drawn-vector-illustration-of-chef-cooker-with-a-mustache-and-plate-with-spaghetti-italian-chef-logo-2F1N217.jpeg" alt="" width="140px" height="80x" />
         <li className={styles.listItem}>Contacts</li>
         </ul>
        </div>
      <div className={styles.item}>
        <div className={styles.cart}> 
        <Image src="/img/shopping-cart-icon-on-white-background-template-for-your-design-PY0KPX.jpeg" alt="" width="40px" height="40px" />
        <div className={styles.counter}>2</div>
        </div>
        </div>
      </div>
  )
}

export default Navbar