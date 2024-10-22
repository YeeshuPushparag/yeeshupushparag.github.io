import styles from "../styles/Technologies.module.css";
import Image from "next/legacy/image";
import { useEffect } from "react";


const Technologies = () => {
  useEffect(() => {
    const technologies = document.querySelectorAll(`.${styles.tech}`);
    const observer = new IntersectionObserver((obj)=>{
        obj.forEach((item)=>{
            item.target.classList.toggle("zoom-animation",item.isIntersecting)
        })
    },{threshold:0.5});
    technologies.forEach((tech)=>{
      observer.observe(tech)
    });
    }, [])
  return (
    <section id="tech" className="section-container">
      <h2 className="section-h2">Technologies</h2>
      <div className={styles.techContainer}>
        <div className={styles.tech}>
            <div className={styles.techImage}>
           <Image src="/html-css-js.png" layout="fill" objectFit="contain" alt="html-css-js" loading="eager"/></div>
        </div>
        <div className={styles.tech}>
            <div className={styles.techImage}>
           <Image src="/nextjs.png" layout="fill" objectFit="contain" alt="html-css-js" loading="eager"/></div>
        </div>
        <div className={styles.tech}>
            <div className={styles.techImage}>
           <Image src="/bootstrap-logo.png" layout="fill" objectFit="contain" alt="html-css-js" loading="eager"/></div>
        </div>
        <div className={styles.tech}>
            <div className={styles.techImage}>
          <Image src="/mern-stack.png" layout="fill" objectFit="contain" alt="mern-stack"loading="eager"/></div>
        </div>
        <div className={styles.tech}>
            <div className={styles.techImage}>
          <Image src="/mean-stack.png" layout="fill" objectFit="contain" alt="mean-stack"loading="eager"/></div>
        </div>
        <div className={styles.tech}>
            <div className={styles.techImage}>
          <Image src="/django-drf.png" layout="fill" objectFit="contain" alt="django-drf" loading="eager"/></div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
