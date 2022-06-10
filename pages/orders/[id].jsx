import Image from "next/image";
import styles from "../../styles/Order.module.css";


const Order = () => {

    const status = 0;
    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}> 
            <div className={styles.row}> 
            <table className={styles.table}>
              <tr className={styles.tr}>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
              </tr>
              <tr>
                  
                  <td>
                  <span className={styles.id}>123456</span>
                  </td>
                  <td>
                  <span className={styles.name}>Isaac Wisco</span> 
                  </td>
                  <td>
                  <span className={styles.address}>123 45th st. Queens, NY </span> 
                  </td>
                  <td>
                  <span className={styles.total}>$29.98</span> 
                  </td>
              </tr>
              </table>  
            </div>
            <div className={styles.row}> 
            <div className={statusClass(0)}>
                <span>Payment</span>
            </div>
            <div className={statusClass(1)}>
                <span>Preparing</span>
            </div>
            <div className={statusClass(2)}>
                <span>On the way!</span>
            </div>
            <div className={statusClass(3)}>
                <span>Delivered</span>
            </div>
            
            </div>
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
          <button disabled className={styles.button}>Paid</button>
         </div>    
         </div>
      </div>
    </div>
  )
}

export default Order