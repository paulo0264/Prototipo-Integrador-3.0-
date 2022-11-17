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
      <img src='/image/github.png' />
      Github
    </button>

    
    <button 
      type='submit'
      className={styles.socialbtn}
      onClick={() => signIn('google')}

    >
      <img src="/image/google.png" />
      Google
    </button>
    <button
      type='submit'
      className={styles.socialbtn}
      onClick={() => signIn('Linkedin')}
    >
      <img src="/image/linkedin.png" />
      Linkedin
    </button>
    <button
      type='submit'
      className={styles.socialbtn}
      onClick={() => signIn('Facebook')}
    >
      <img src="/image/facebook.png" />
      Facebook
    </button>
  </div>
    </>
     
      
      // {isRedirecting && <div className={styles.redirecting}>Redirecting...</div>} */
    
   
  );
};

export default SocialLogins;