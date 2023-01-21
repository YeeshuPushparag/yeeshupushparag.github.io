import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { BsStackOverflow } from 'react-icons/bs';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar} id="navbar">
        <div className={styles.logo}>
      <Link href="/" className={styles.discLogo}>
          <DiCssdeck size="2.2rem"/>
      </Link>
      <Link href="/" className={styles.logoName}>
         Pushparag
      </Link>
    </div>
    <div className={styles.navlinks}>
      <li>
        <a href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#tech">
          Technologies
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact
        </a>
      </li>
    </div>
    <div className={styles.socialicons}>
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
  )
}

export default Navbar