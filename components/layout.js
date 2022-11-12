import Head from 'next/head';
import Header from './header';

import styles from '../styles/layout.module.css'

const Layout = (props) => (
  <>
    <Head>
      <title>INTEGRADOR 3.0</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <main>
      <div className={styles.container}>{props.children}</div>
    </main>
    <footer className={styles.footer}>
      <p>
        <span>Sistemas Corporativo 3.0</span> &copy; 2022
      </p>
    </footer>
   
  </>
);

export default Layout;