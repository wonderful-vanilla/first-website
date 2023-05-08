import React, { useEffect, useState } from 'react';
import S from './ContactMe.module.css';
import { useGlobalContext } from '../../contexts/globalContext';

function ContactMe() {
    let { themeState } = useGlobalContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <div className={S.wrapper} style={themeState}>
            <h1>Contact Page</h1>
            <div className={S.map}>
                <iframe src="https://www.google.com/maps/place/Kundrathur,+Chennai,+Tamil+Nadu+600069/@12.9927465,80.0939809,15z/data=!3m1!4b1!4m6!3m5!1s0x3a528aa64f1f758b:0xbfca0f9632a31459!8m2!3d12.997668!4d80.0972003!16zL20vMGY1YzFo" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='maap'></iframe>
            </div>
            <div className={S.form}>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder='Enter your name' onChange={e => setName(e.target.value)} value={name} required />
                    <input type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} required />
                    <textarea cols="30" rows="10" placeholder='Enter your message' onChange={e => setMsg(e.target.value)} required value={msg}></textarea>
                    <button type="submit">SEND</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe