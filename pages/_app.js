import '../styles/globals.css'
// import { magic } from '../lib/magic';
import { useState, useEffect } from 'react';
// import { UserContext } from '../lib/UserContext';
import Router from 'next/router';
import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'




  // const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser({ loading: true });
  //   Router.push('/login');
    
  // }, []);
  

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


// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <Layout>
//       <Component {...pageProps} />
//       </Layout>
//     </Provider>
//   )
// }

export default function MyApp({ Component, pageProps: { session, ... pageProps } }) {
  return (
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
)
}

