import { useState } from 'react';
import { signIn } from 'next-auth/react';
import styles from '../styles/social-logins.module.css'

const SocialLogins = () => {
  // const providers = ['Linkedin','google', 'facebook', 'github'];


  return (
    <>
      <div className={styles.container}></div>
  
          <div>
            <button
              type='submit'
              className={styles.socialbtn}
              onClick={() => signIn('github')}
            >
              Github
            </button>
            {/* <button
              type='submit'
              className={styles.socialbtn}
              onClick={() => signIn('google')}
            >
              Google
            </button>
            <button
              type='submit'
              className={styles.socialbtn}
              onClick={() => signIn('Linkedin')}
            >
              Linkedin
            </button>
            <button
              type='submit'
              className={styles.socialbtn}
              onClick={() => signIn('Facebook')}
            >
              Facebook
            </button> */}
          </div>
      
      {/* {isRedirecting && <div className={styles.redirecting}>Redirecting...</div>} */}
      
    </>
  );
};

export default SocialLogins;