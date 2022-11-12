import { useState } from 'react';

import styles from '../styles/social-logins.module.css'

const SocialLogins = ({ onSubmit }) => {
  const providers = ['Linkedin','google', 'facebook', 'github'];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <div className={styles.container}></div>
      {providers.map((provider) => {
        return (
          <div key={provider}>
            <button
              type='submit'
              className={styles.socialbtn}
              onClick={() => {
                setIsRedirecting(true);
                onSubmit(provider);
              }}
              key={provider}
              style={{ backgroundImage: `url(${provider}.png)` }}
            >
              {/* turns "google" to "Google" */}
              {provider.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          </div>
        );
      })}
      {isRedirecting && <div className={styles.redirecting}>Redirecting...</div>}
      
    </>
  );
};

export default SocialLogins;