import React from 'react';
import styles from './Footer.module.css';

const FooterSection = () => {
    return (
        <div className={styles.piePagina}>
            <p>Aplicación desarrollada por los alumnos Marcos Zalazar y Pablo Toledo</p>
            <p>MCGA 2023</p>
            <p>Código fuente FrontEnd: <a href='https://github.com/pabloatoledo/final_mcga_front' target='_blank' rel="noopener noreferrer">Link a GitHub FrontEnd</a></p>
            <p>Código fuente BackEnd: <a href='https://github.com/pabloatoledo/final_mcga_back' target='_blank' rel="noopener noreferrer">Link a GitHub BackEnd</a></p>
        </div>
    );
}

export default FooterSection;