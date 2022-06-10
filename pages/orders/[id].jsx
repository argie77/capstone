import Image from "next/image";
import styles from "../../styles/Order.module.css";


const Order = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}> </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>Cart Total</h2>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$29.98
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$29.98
          </div>
          <button disabled className={styles.button}>Paid</button>
         </div>    
         </div>
      </div>
    </div>
  )
}

export default Order