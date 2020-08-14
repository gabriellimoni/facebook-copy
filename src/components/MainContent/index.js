import React, { useState } from 'react'

import './styles.css'

import MyPosting from './MyPosting'

export default function MainContent() {
    return (
        <div className="main-content">
            {/* <section className="stories">
                
            </section> */}

            <section className="my-posting">
                <MyPosting />
            </section>
        </div>
    )
}