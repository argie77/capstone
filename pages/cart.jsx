import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}> 
       <div className={styles.left}>
          <table className={styles.table}>
              <tr className={styles.tr}>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
              </tr>
              <tr>
                  <td>
                      <div className={styles.imgContainer}>
                      <Image src="/img/photo-1616299908398-9af1134ad522.avif" layout="fill" objectFit="cover" alt="" />
                      </div>
                  </td>
                  <td>
                  <span className={styles.product}>Penne</span>
                  </td>
                  <td>
                  <span className={styles.price}>$14.99</span> 
                  </td>
                  <td>
                  <span className={styles.quantity}>2</span> 
                  </td>
                  <td>
                  <span className={styles.total}>$29.98</span> 
                  </td>
              </tr>
              </table>  
        </div>
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
          <button className={styles.button}>Checkout</button>
         </div>
        </div>
        </div>
  )
}


export default Cart