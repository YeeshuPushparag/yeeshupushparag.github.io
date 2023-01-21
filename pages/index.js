import Head from 'next/head'
import { useEffect } from 'react'
import Alert from '../components/Alert'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MainContainer from '../components/MainContainer'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  }, [])
  useEffect(() => {
    const primaryBtn = document.querySelectorAll(".primary-btn");
    const observer = new IntersectionObserver((obj)=>{
        obj.forEach((item)=>{
          item.target.classList.toggle("move-animation",item.isIntersecting)
        })
    });
    primaryBtn.forEach((btn)=>{
      observer.observe(btn)
    })
  }, [])
  
  return (
    <>
      <Head>
        <title>Yeeshu Pushparag</title>
        <meta name="description" content="My name is Yeeshu Pushparag and i am a full stack web developer. I am experienced in frontend as well as in backend." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Alert/>
      <div className={styles.header}>
        <Navbar/>
        <MainContainer/>
      </div>
      <Projects/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </>
  )
}
