import styles from "../styles/Projects.module.css";
import Image from "next/legacy/image";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
  const projects = document.querySelectorAll(`.${styles.project}`);
  const observer = new IntersectionObserver((obj)=>{
      obj.forEach((item)=>{
          item.target.classList.toggle("zoom-animation",item.isIntersecting)
      })
  },{threshold:0.5});
  projects.forEach((project)=>{
    observer.observe(project)
  });
  }, [])
  
  const disClick = ()=>{
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "0px";
    messageAlert.children[0].innerHTML = "This project is not hosted";
    setTimeout(() => {
      messageAlert.style.top = "-60px";
    }, 1500);
  }
  const disClick2 = ()=>{
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "0px";
    messageAlert.children[0].innerHTML = "This is client's website.";
    setTimeout(() => {
      messageAlert.style.top = "-60px";
    }, 1500);
  }
  return (
    <section id="projects" className="section-container">
      <h2 className="section-h2">Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/restaurant.png" layout="fill" objectFit="contain" alt="restaurant-website" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Restaurant</h3>
            <div className={styles.stack}>
              <span>NextJs</span>
              <span>React</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/nextjs-restaurant"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <a
                href="https://yeeshupushparag.github.io/nextjs-restaurant/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Live</button>
              </a>
            </div>
          </div>
        </div>  <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/fithub.png" layout="fill" objectFit="contain" alt="fitness-website" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Fitness Club</h3>
            <div className={styles.stack}>
              <span>NextJs</span>
              <span>React</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/nextjs-fithub"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <a
                href="https://yeeshupushparag.github.io/nextjs-fithub/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/dentist.png" layout="fill" objectFit="contain" alt="dentist-website" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Dental Clinic</h3>
            <div className={styles.stack}>
              <span>NextJs</span>
              <span>React</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/nextjs-dentist"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <a
                href="https://yeeshupushparag.github.io/nextjs-dentist/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/travel-agency.png" layout="fill" objectFit="contain" alt="travel-agency-website" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Travel Agency</h3>
            <div className={styles.stack}>
              <span>NextJs</span>
              <span>React</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/nextjs-travel"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <a
                href="https://nextjs-travel-wine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Live</button>
              </a>
            </div>
          </div>
        </div>
      
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image
              src="/Guess-the-planet.png"
              layout="fill"
              objectFit="contain"
              alt="guessing-game"
              loading="eager"
            />
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Guessing Game</h3>
            <div className={styles.stack}>
              <span>HTML</span>
              <span>Javascript</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/guess-the-planet"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <a
                href="https://yeeshupushparag.github.io/guess-the-planet/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/digisat.jpg" layout="fill" objectFit="contain" alt="digisat-skill-india" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Digisat Website</h3>
            <div className={styles.stack}>
            <span>NextJs</span>
            <span>React</span>
            </div>
            <div className={styles.source}>
            <button onClick={disClick2} className={styles.disabled}>
                Code
              </button>
              <a
                href="https://digisat.in/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Live</button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/rolla-academy.png" layout="fill" objectFit="contain" alt="rolla-academy"  loading="eager" />
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Rolla Academy</h3>
            <div className={styles.stack}>
            <span>HTML</span>
            <span>Javascript</span>
            </div>
            <div className={styles.source}>
            <button onClick={disClick2} className={styles.disabled}>
                Code
              </button>
              <a
                href="http://rolla.in/"
                target="_blank"
                rel="noreferrer"
              >
                <button onClick={disClick} className={styles.disabled}>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/hope-hospital.jpg" layout="fill" objectFit="contain" alt="hope-hospital"  loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Hope Hospital</h3>
            <div className={styles.stack}>
            <span>HTML</span>
            <span>Javascript</span>
            </div>
            <div className={styles.source}>
            <button onClick={disClick2} className={styles.disabled}>
                Code
              </button>
              <a
                href="https://drpushkargalamhopehospital.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button onClick={disClick} className={styles.disabled}>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/signaasat.png" layout="fill" objectFit="contain" alt="hope-hospital"  loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Signaasat</h3>
            <div className={styles.stack}>
            <span>NextJs</span>
            <span>React</span>
            </div>
            <div className={styles.source}>
            <button onClick={disClick2} className={styles.disabled}>
                Code
              </button>
              <a
                href="https://signaasat.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button onClick={disClick} className={styles.disabled}>Live</button>
              </a>
            </div>
          </div>
        </div> */}
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/React.png" layout="fill" objectFit="contain" alt="react-todo-app" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Mern Project</h3>
            <div className={styles.stack}>
              <span>MongoDb</span>
              <span>Express</span>
              <span>React</span>
              <span>Node</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/mern-todo"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <button onClick={disClick} className={styles.disabled}>
                Live
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/Angular.png" layout="fill" objectFit="contain" alt="angular-todo-app" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Authentication</h3>
            <div className={styles.stack}>
              <span>Angular</span>
              <span>Django</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/angular-django"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <button onClick={disClick} className={styles.disabled}>
                Live
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <Image src="/Django.png" layout="fill" objectFit="contain" alt="django-todo-app" loading="eager"/>
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.h3}>Text Analyzer</h3>
            <div className={styles.stack}>
              <span>Django</span>
              <span>Bootstrap</span>
            </div>
            <div className={styles.source}>
              <a
                href="https://github.com/YeeshuPushparag/django-text-analyzer"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.active}>Code</button>
              </a>
              <button onClick={disClick} className={styles.disabled}>
                Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
