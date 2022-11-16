import EmailForm from '../../components/email-form';
import SocialLogins from '../../components/social-logins';
import { getSession } from 'next-auth/react';

import styles from '../../styles/login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <EmailForm />
      <SocialLogins />
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
 
    if(session){
      
      return {
        redirect: {
          destination: '/home/dashboard',
          permanent: false
        }
      }
    }
  return {
    props: {
      session
    }
  }
}

export default Login;
