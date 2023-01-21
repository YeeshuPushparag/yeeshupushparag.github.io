import React, { useEffect } from 'react'
import BackgroundAnimation from '../components/BackgroundAnimation'
import styles from '../styles/MainContainer.module.css'
const MainContainer = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const mainContainer = document.querySelector(`.${styles.mainContainer}`);
    const observer = new IntersectionObserver((obj)=>{
        obj.forEach((item)=>{
         if (!item.isIntersecting) {
          console.log("not inter")
          navbar.classList.add("fixed-nav")
         }
         else{
          console.log("inter")
          navbar.classList.remove("fixed-nav")
         }
        })
    });
    observer.observe(mainContainer)
  }, [])
  return (
    <main className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <h2>
          Welcome To <br />
          My Personal Portfolio
        </h2>
        <p>
       Hello everyone, My name is Yeeshu Pushparag and i am a web developer. I am experienced in frontend as well as in backend web development technologies.
        </p>
        <a href="#contact" className='primary-btn'><button><span>Have a Talk</span></button></a>
      </div>
      <div className={styles.rightSection}>
        <BackgroundAnimation/>
      </div>
    </main>
  )
}

export default MainContainer