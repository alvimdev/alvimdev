import React from "react";

import styles from './Habilities.module.css';

import LanguageChart from './LanguageChart';

export function Habilities() {

    return (
        <section className={styles.habilities}>
            <h3>Principais Linguagens</h3>
            <LanguageChart username='alvimdev'/>
        </section>
    )
}