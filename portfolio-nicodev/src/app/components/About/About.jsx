"use client";

import styles from "./About.module.css"
import Image from "next/image";



export default function About() {
    return ( 
    <section >
        <div className={styles.aboutMe}>
            <h2 className={styles.TittleText  }> ACERCA DE MÍ</h2> 
            
        </div>
    
        <div className={styles.aboutMeContent}>
            <div className={styles.aboutImg}>
                <Image src="/img/NicoDev.jpg" alt="Imagen NicoDev"width={300}height={250}className={styles.borderAnim}priority/>
                <p className={styles.waveText}>
                    Always Learning Always Building
                    </p>
                
            </div>
            <div className={styles.aboutTxt}>
                <p>
                    Soy un <i>Software Development</i> especializado en desarrollar e implementar soluciones eficientes.<br></br> Me caracterizo por aplicar buenas prácticas, escribir código limpio y optimizado, y mantener un aprendizaje constante. <br></br>Mi objetivo es convertirme en un Full-Stack Developer, dominando diversas tecnologías y aprovechando mi rápida capacidad de aprendizaje, la autodisciplina y la formación académica. </p>
            </div>
        </div>
            
        </section>
);}