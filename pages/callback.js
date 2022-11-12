// import { useEffect, useContext } from 'react';
// import Router, { useRouter } from 'next/router';
// // import { magic } from '../lib/magic';
// import { UserContext } from '../lib/UserContext';
// import Loading from '../components/loading';

// const Callback = () => {
//   const router = useRouter();
//   const [user, setUser] = useContext(UserContext);

//   // O redirecionamento contém um parâmetro de consulta `provider` se o usuário estiver fazendo 
//   // login com um provedor social
//   useEffect(() => {
//     router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin();
//   }, [router.query]);

//   // `getRedirectResult()` retorna um objeto com dados do usuário do Magic e do provedor social
//   const finishSocialLogin = async () => {
//     let result = await magic.oauth.getRedirectResult();
//     authenticateWithServer(result.magic.idToken);
//   };

//   // `loginWithCredential()` retorna um didToken para o usuário logando
//   const finishEmailRedirectLogin = () => {
//     if (router.query.magic_credential)
//       magic.auth.loginWithCredential().then((didToken) => authenticateWithServer(didToken));
//   };

//   // Enviar token ao servidor para validar
//   const authenticateWithServer = async (didToken) => {
//     let res = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + didToken,
//       },
//     });

//     if (res.status === 200) {
//       // Defina o UserContext para o usuário conectado agora
//       let userMetadata = await magic.user.getMetadata();
//       await setUser(userMetadata);
//       Router.push('/profile');
//     }
//   };

//   return <Loading />;
// };

// export default Callback;