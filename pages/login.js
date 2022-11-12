import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { UserContext } from '../lib/UserContext';
import EmailForm from '../components/email-form';
import SocialLogins from '../components/social-logins';

import styles from '../styles/login.module.css'

const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // Redirecionar para /profile se o usuário estiver logado
  useEffect(() => {
    user?.issuer && Router.push('/profile');
  }, [user]);

  async function handleLoginWithSocial(provider) {
    await oauth.loginWithRedirect({
      provider, // google, github,linkedin, etc
      redirectURI: new URL('/index', window.location.origin).href, // redirecionamento necessário para concluir o login social
    });
  }

  return (
    <div className={styles.login}>
      <EmailForm />
      <SocialLogins onSubmit={handleLoginWithSocial} />
    </div>
  );
};

export default Login;