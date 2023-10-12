import React, { useState } from 'react'
import './Card.css'
import { Button } from '../IndexComponent'

const Card = (props) => {

    const [active, setActive] = useState(false)

    const handleOverview = () => {
        setActive(!active)
    }

    return (
        <>
            <div className={`cards ${active ? 'active' : ''}`} key={props.id}>
                <div className="top-view">
                    <img src={props.poster} alt={props.title} className="cards-images" />
                    <h1 className="cards-title">{props.title}</h1>
                    <p className='cards-rating'>{props.rated}</p>
                    <Button text={props.text} onClick={handleOverview} />
                </div>
                <div className='bottom-view'>
                    <p>{props.overview}</p>
                </div>
            </div>
        </>
    )
}

export default Card