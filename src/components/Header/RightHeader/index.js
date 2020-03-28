import React from 'react'

import './styles.css'
import { FaPlus, FaFacebookMessenger, FaBell, FaChevronDown } from 'react-icons/fa'
import profileImg from '../../../assets/profile-img.jpg'

export default function MiddleHeader() {
    const items = {
        FaPlus: <FaPlus size={16} />,
        FaFacebookMessenger: <FaFacebookMessenger size={18} />,
        FaBell: <FaBell size={18} />,
        FaChevronDown: <FaChevronDown size={18} />,
    }

    return (
        <>
            <div className="right-header-item-my-account">
                <img src={profileImg} />
                <p>
                    Gabriel
                </p>
            </div>
            {Object.keys(items).map(item => (
                <div className="right-header-item">
                    {items[item]}
                </div>
            ))}
        </>
    )
}