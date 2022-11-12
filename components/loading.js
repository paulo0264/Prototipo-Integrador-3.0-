import styles from '../styles/loading.module.css'

const Loading = () => (
    <div className={styles.container}>
      <img src='./spinner.svg' height='70px' alt='Loading' />
    </div>
  );
  
  export default Loading;