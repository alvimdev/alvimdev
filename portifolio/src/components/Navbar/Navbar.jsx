import React from "react";

import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineLink} from 'react-icons/ai';

import styles from './Navbar.module.css';


export function Navbar(){
    return (
        <nav className={styles.navbar}>
            <a href={window.location.origin}><img src="/logo.png" alt="Logo" className={styles.navbar_logo}/></a>
            <ul className={styles.navbar_links}>
                <li><a href="https://github.com/alvimdev" target="_blank"><AiFillGithub/></a></li>
                <li><a href="https://linkedin.com/in/bernardo-alvim"><AiFillLinkedin/></a></li>
                <li><a href="https://alvimlinks.netlify.app" target="_blank"><AiOutlineLink/></a></li>
            </ul>
        </nav>
    )
}