import React, { useEffect } from 'react';
import S from './About.module.css';
import ME from '../../assets/me.jpg'
import { useGlobalContext } from '../../contexts/globalContext'

function About() {

    let { themeState } = useGlobalContext();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <div className={S.wrapper} style={themeState}>
            <div className={S.left}>
                <img src={ME} alt="myPicture" />
            </div>
            <div className={S.right}>
                <h1>About Me</h1>
                <p>My name is <a href="https://www.linkedin.com/in" target='_blank' rel="noreferrer">Fawaaz</a>
                </p>
            </div>
        </div>
    )
}

export default About