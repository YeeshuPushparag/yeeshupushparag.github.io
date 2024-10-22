import styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsStackOverflow } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='section-container'>
        <div className={styles.footerLinks}>
        <div className={styles.emailcontainer}>
            <h4>Email</h4>
            <a href="mailto:pushparagyeeshu@gmail.com">pushparagyeeshu@gmail.com</a>
        </div>
        <div className={styles.footerIcons}>
      <a href="https://github.com/YeeshuPushparag" target="_blank" rel="noreferrer">
        <AiFillGithub size="2rem" />
      </a>
      <a href="https://twitter.com/ThePushparag" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle size="2rem"/>
      </a>
      <a href="https://stackoverflow.com/users/20773215/yeeshu-pushparag" target="_blank" rel="noreferrer">
        <BsStackOverflow size="1.6rem" />
      </a>
    </div>
        </div>
        <p className={styles.copyright}>All rights reserved &copy; 2024</p>
    </footer>
  )
}

export default Footer