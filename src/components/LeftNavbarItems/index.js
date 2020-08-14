import React, { useState } from 'react'

import './styles.css'
import { FaPeopleCarry, FaFlag, FaStore, FaPlayCircle, FaCalendar, FaHeart, FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function LeftNavbarItems() {
    const init_items = {
        groups: <><FaPeopleCarry size={25} color="#1B82F5" /> Grupos</>,
        pages: <><FaFlag size={25} color="#EA572A" /> Páginas</>,
        market: <><FaStore size={25} color="#1B82F5" /> Marketplace</>,
        videos: <><FaPlayCircle size={25} color="#1B82F5" /> Videos</>,
        events: <><FaCalendar size={25} color="#fff" /> Eventos</>,
        fundraising: <><FaHeart size={25} color="red" /> Campanha de arrecadação de fundos</>,
    }
    const see_more_items = {
        groups2: <><FaPeopleCarry size={25} color="#1B82F5" /> Grupos</>,
        pages2: <><FaFlag size={25} color="#EA572A" /> Páginas</>,
        market2: <><FaStore size={25} color="#1B82F5" /> Marketplace</>,
        videos2: <><FaPlayCircle size={25} color="#1B82F5" /> Videos</>,
        events2: <><FaCalendar size={25} color="#fff" /> Eventos</>,
        fundraising2: <><FaHeart size={25} color="red" /> Campanha de arrecadação de fundos</>,
    }

    const [items, setItems] = useState({...init_items})
    const [seeing_more, setSeeingMore] = useState(false)

    function handleSeeMore() {
        if (!seeing_more) {
            setItems({...init_items, ...see_more_items})
            setSeeingMore(true)
        } else {
            setItems({...init_items})
            setSeeingMore(false)
        }
    }

    function renderSeeMore() {
        if (seeing_more) {
            return (
                <div className="see-more-container">
                    Ver menos &nbsp;<FaChevronUp size={14} />
                </div>
            )
        } else {
            return (
                <div className="see-more-container">
                    Ver mais &nbsp;<FaChevronDown size={14} />
                </div>
            )
        }
    }

    return (
        <ul className="left-sidebar-list">
            {Object.keys(items).map(item => (
                <li key={item}>
                    {items[item]}
                </li>
            ))}

            <li onClick={handleSeeMore}>
                {renderSeeMore()}
            </li>
        </ul>
    )
}