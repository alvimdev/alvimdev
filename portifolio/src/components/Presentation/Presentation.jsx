import React from "react";

import LastNameComponent from "./Lastname";
import styles from './Presentation.module.css'

import { CgChevronRight } from "react-icons/cg";
import { CgSoftwareDownload } from "react-icons/cg";

export function Presentation() {

    return (
        <section className={styles.presentation}>
            <article className={styles.presentation_content}>
                <h1 className={styles.title}>
                    <b>BERNARDO</b>
                    <LastNameComponent />
                </h1>
                <h2 className={styles.subtitle}>
                    <CgChevronRight className={styles.console_icon}/>
                    <a href="https://github.com/DenverCoder1/readme-typing-svg" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://readme-typing-svg.herokuapp.com?font=Kanit&color=D3D3D3&size=28%&center=false&vCenter=false&width=600&height=40&lines=Front-end+Developer;Software+Engineer+Student;System+Development+Technician;React+⚛" 
                            alt="Desenvolvedor Front-end;Estudante de Engenharia de Software;Técnico em Desenvolvimento de Sistemas"
                        />
                    </a>
                </h2>
                <p className={styles.description}>
                    Técnico em Desenvolvimento de Sistemas pelo COLTEC - UFMG e estou cursando, atualmente, Engenharia de Software na PUC Minas.<br/>
                    <i>Apaixonado por aprender e adaptar-me rapidamente.</i>
                </p>
                <button onClick={() => window.open('/Curriculo - Bernardo Alvim.pdf', '_blank', 'noopener, noreferrer')} className={styles.download_button}>
                    <b>Curriculum</b>
                    <CgSoftwareDownload className={styles.download_icon}/>
                </button>
            </article>
            <aside className={styles.hologram_container}>
                <div className={styles.hologram_image}>
                    <img src="/4-removebg.png" alt="alvimdev's logo" />
                </div>
                <div className={styles.hologram_light}></div>
                <div className={styles.hologram_base}>
                    <div className={styles.hologram_shadow}></div>
                </div>
            </aside>
        </section>
    )
}