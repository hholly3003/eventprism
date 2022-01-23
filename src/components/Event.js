import React from "react";

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
                            <img id = 'img-star' src='./images/star.png' />
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
