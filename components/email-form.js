import { useState } from 'react';
// import { Input, Icon, MonochromeIcons, CallToAction } from 'next/link';

import styles from '../styles/email-form.module.css'

const EmailForm = ({ onEmailSubmit, disabled }) => {
  // const [email, setEmail] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   onEmailSubmit(email);
  // };

  return (
    <>
      <form>
        <h3 className={styles.formheader}>LOGAR NO SISTEMA</h3>
        <div className={styles.inputwrapper}>
          <input
            placeholder='Entre com Email'
            size='sm'
            type='email'
          />
        </div>
        <div className={styles.inputwrapper}>
          <input
            placeholder='Entre com Senha'
            size='sm'
            type='email'
          />
        </div>
        <button type="submit" className={styles.btn}>
          LOGAR
        </button>
      </form>
    </>
  );
};

export default EmailForm;