import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import PastaList from '../components/PastaList';
import axios from 'axios';


//props function home
//was having a problem mapping but I was just missing {} on my function pasta 
export default function Home({ pastaList }) {

  return (
    <div className={styles.container}>

      <Head>
        <title>Pasta in New York</title>
        <meta name="description" content="Best pasta  in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Featured />
<PastaList pastaList={pastaList} />

    </div>
  )
}
//In nextJs this is how we fetch data because we are using server site rendering not the client side
export const getServerSideProps = async () =>{
  //using this for our props
const res = await axios.get("http://localhost:3000/api/products");
return {
  props: {
    pastaList: res.data,
  }
}
}
