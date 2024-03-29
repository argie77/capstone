import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";





const Cart = () => {

  // This values are the props in the UI 19-74 is about paypal
  const[open,setOpen] = useState(true)
  const amount = "2";
  const currency = "USD";
  const style = {"layout":"vertical"};


// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                      // Your code here after capture the order
                  });
              }}
          />
      </>
  );
}




  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
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
              {cart.products.map((product) =>(
              <tr className={styles.tr} key={product._id}>
                  <td>
                      <div className={styles.imgContainer}>
                      <Image src="/img/photo-1616299908398-9af1134ad522.avif" layout="fill" objectFit="cover" alt="" />
                      </div>
                  </td>
                  <td>
                  <span className={styles.name}>{product.tilte}Penne Pasta</span>
                  </td>
                  <td>
                  <span className={styles.price}>${product.price}14.99</span> 
                  </td>
                  <td>
                  <span className={styles.quantity}>{product.quantity}</span> 
                  </td>
                  <td>
                  <span className={styles.total}>$14.99</span> 
                  </td>
              </tr>
              ))}
              </table>  
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>Cart Total</h2>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          {open ? (
            <PayPalScriptProvider
                options={{
                    "client-id": "AUpsOqGko6qBs2elzCuwGUYj41mSOO0KVhIqLF90r7TpkYJqsyR-4x93iV3La-xo17NIhGnK5YsuQlTA",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding":"credit,card"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
          ) :(

            <button onClick={()=> setOpen(true)} className={styles.button}>Checkout</button>
            )}
          


         </div>
        </div>
        </div>
  )
}


export default Cart