import React, { useState } from 'react'

import './styles.css'
import ad_logo from '../../assets/ad-logo.png'
import ad_content from '../../assets/ad-content-img.png'
import { FaPeopleCarry, FaFlag, FaStore, FaPlayCircle, FaCalendar, FaHeart, FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function LeftNavbarItems() {
    const contacts = [
        <><FaPeopleCarry size={25} color="#1B82F5" /> Grupos</>
    ]

    return (
        <>
            <div className="right-advertising-contaiener">
                <h1>Patrocinado</h1>
                <header>
                    <img src={ad_logo}/>
                    <h2>Coca-cola</h2>
                </header>
                <section>
                    <img src={ad_content}/>
                </section>
            </div>

            <ul className="right-sidebar-list">
                {contacts.map(item => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}