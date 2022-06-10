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
                      <Image src="/img/" layout="fill" objectFit="cover" alt="" />
                      </div>
                  </td>
                  <td>
                  <span className={styles.product}>Pasta</span>
                  </td>
                  <td>
                  <span className={styles.name}>Raviolli</span> 
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
        {/* <div className={styles.right}></div>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart total</h2>
            <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          <button className={styles.button}>Checkout</button>
        </div> */}

        </div>
  )
}


export default Cart