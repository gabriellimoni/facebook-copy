import React, { useState } from 'react'

import './styles.css'
import { FaHome, FaPlayCircle, FaStore, FaLayerGroup, FaPaintBrush } from 'react-icons/fa'

export default function MiddleHeader() {
    const [active_tab, setActiveTab] = useState('FaHome')
    const tabs = {
        FaHome: <FaHome size={25}/>,
        FaPlayCircle: <FaPlayCircle size={25}/>,
        FaStore: <FaStore size={25} key="FaStore"/>,
        FaLayerGroup: <FaLayerGroup size={25}/>,
        FaPaintBrush: <FaPaintBrush size={25}/>,
    }

    async function handleTabClick(tab) {
        if (tab === active_tab) return
        // TODO: push to another page... whatever
        setActiveTab(tab)
    }
    
    return (
        <>
            {Object.keys(tabs).map(tab => (
                <div 
                    className={active_tab === tab ? `middle-header-tab-container active` : 'middle-header-tab-container'}
                    onClick={() => handleTabClick(tab)}
                    key={tab}
                >
                    <p>
                        {tabs[tab]}
                    </p>
                </div>    
            ))}
        </>
    )
}