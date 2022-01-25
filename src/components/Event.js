import React from "react";
import '../styles/Event.css'
import star from '../images/star.png'
function Event({title, image, date, months, score, lowest_price}) {
    return (
        <div className='events'>
            <div className='events-container'>
                <div className='img-container'>
                    <img id='image_event' src={image}/>
                </div>
                <p id='title'>{title}</p>
                <div className='content_event'>
                    <div className='information'>
                        <p id='date'>{`${months[date[1] - 1]} ${date[2]}`}</p>
                        <div className='score'>
                            <img id = 'img-star' src={star} />
                            <p>{score}</p>
                        </div>
                    </div>
                    <p id='price'>{`From ${lowest_price}`}</p>
                </div>

            </div>
            
        </div>
    )
}

export default Event;
