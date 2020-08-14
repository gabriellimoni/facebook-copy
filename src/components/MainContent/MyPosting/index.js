import React, { useState } from 'react'

import './styles.css'
import profileImg from '../../../assets/profile-img.jpg'

import { FaImage, FaVideo, FaSmile } from 'react-icons/fa'

export default function MyPosting() {
    const postOptions = {
        live: {
            text: 'Vídeo ao vivo',
            icon: <FaVideo size={22} color="#F02849"/>,
        },
        videoAndImage: {
            text: 'Foto/vídeo',
            icon: <FaImage size={22} color="#45BD62"/>,
        },
        feeling: {
            text: 'Sentimento/atividade',
            icon: <FaSmile size={22} color="#F7B928"/>,
        },
    }
    const postOptionsContent =  Object.keys(postOptions).map(key => (
        <div class="post-option">
            {postOptions[key].icon}
            <h3>{postOptions[key].text}</h3>
        </div>
    ))

    return (
        <>
            <div className="write-post">
                <img src={profileImg}/>
                <input type="text" placeholder="No que você está pensando, Fulano?"/>
            </div>

            <div className="post-options">
                {postOptionsContent}
            </div>
        </>
    )
}