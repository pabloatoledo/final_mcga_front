import React from 'react';
import styles from './Footer.module.css';

const FooterSection = () => {
    return (
        <div className={styles.piePagina}>
            <p>Aplicación desarrollada por los alumnos Marcos Zalazar y Pablo Toledo</p>
            <p>MCGA 2022</p>
            <p>Código fuente: <a href='https://github.com/mzalazar1/MCGA-2022-PARCIAL-02' target='_blank' rel="noopener noreferrer">Link a GitHub</a></p>
        </div>
    );
}

export default FooterSection;