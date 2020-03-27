import React from 'react'
import './styles.css'

import { FaFacebookF } from 'react-icons/fa'

export default function Header() {
    return (
        <header className="header-container">
            <section>
                <FaFacebookF size={40} color="#fff"/>
                <input placeholder="Pesquisar no facebook" className="header-input"/>
            </section>

            <section>
                Middle
            </section>

            <section>
                Right
            </section>
        </header>
    )
}