import '../styles/globals.css'

import { useState, useEffect } from 'react';
import { UserContext } from '../lib/UserContext';
import Router from 'next/router';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({ loading: true });
    Router.push('/login');
    
  }, []);
  

    // Se isLoggedIn for true, defina o UserContext com os dados do usuário
   // Caso contrário, redirecione para /login e defina UserContext como { user: null }

  // useEffect(() => {
  //   setUser({ loading: true });
  //   magic.user.isLoggedIn().then((isLoggedIn) => {
  //     if (isLoggedIn) {
  //       magic.user.getMetadata().then((userData) => setUser(userData));
  //     } else {
  //       Router.push('/login');
  //       setUser({ user: null });
  //     }
  //   });
  // }, []);


  return (
      <UserContext.Provider value={[user, setUser]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
  );
}
