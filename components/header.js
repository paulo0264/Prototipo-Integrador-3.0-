import { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { UserContext } from '../lib/UserContext';

import styles from '../styles/header.module.css'

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    // magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push('/login');
    // });
  };

  return (
    <header className={styles.container}>
       <nav>
        <ul>
          <li>
            <Link href='/login'>
                SOBRE
            </Link>
          </li>
          <li>
            <Link href='/login'>
                CONTATOS
            </Link>
          </li>
        </ul>
      </nav>
      {/* <nav>
        <ul>
          {user?.loading ? (
            // If loading, don't display any buttons specific to the loggedIn state
            <div style={{ height: '38px' }}></div>
          ) : user?.issuer ? (
            <>
              <li>
                <Link href='/'>
                  <TextButton color='primary' size='sm'>
                    INICIO
                  </TextButton>
                </Link>
              </li>
              <li>
                <Link href='/profile'>
                  <TextButton color='primary' size='sm'>
                    USUARIO
                  </TextButton>
                </Link>
              </li>
              <li>
                <a>
                  <TextButton color='warning' size='sm' onPress={logout}>
                    LOGOUT
                  </TextButton>
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link href='/login'>
                  LOGAR
              </Link>
            </li>
          )}
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;