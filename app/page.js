"use client"

import Image from 'next/image';
import styles from './../styles/page.module.css';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {

  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then (res => {
      const data = res.data.slip
      
      setAdvice(data);
    })
    .catch (err => {
      console.log(err)
    })
  }, []);

const handleClick = () => {
  axios.get("https://api.adviceslip.com/advice")
    .then (res => {
      const data = res.data.slip
      
      setAdvice(data);
    })
    .catch (err => {
      console.log(err)
    })
}

  return (
    <main className={styles.main}>
      
      <div className={styles.card}>
        <p>ADVICE #{advice.id}</p>
        <h2>
          "{advice.advice}"
        </h2>
        <Image
          src="./assets/images/pattern-divider-desktop.svg"
          width={400}
          height={10}
          className={styles.divider_desktop}
          alt="divider image"
        >
          
        </Image>
       <br/>
       <button className={styles.icon_dice} onClick={handleClick}>
        <Image
          src="./assets/images/icon-dice.svg"
          width={20}
          height={20}
          className={styles.icon_img}
          alt="icon-dice"
          
        />
        </button>
      </div>
    </main>
  )
}