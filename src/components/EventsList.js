import React from 'react'
import Events from './Event'
import {useState, useEffect, Fragment, useRef} from 'react'
import {v1} from 'uuid';
import UserInput from './UserInput';
import axios from 'axios';


function EventsList({name}) {
    const [items, setItems] = useState([]);
    const [type, setType] = useState('');
    const typeRef = useRef()
    const client_id = 'MjUzNzU2NTF8MTY0MjI5NTUyNi40ODgzNzgz'
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    useEffect(async () => {
        const getEvent = async () => {
            try {
                const response = await axios.get(`https://api.seatgeek.com/2/events?type=${type}&geoip=true&client_id=${client_id}&per_page=100&format=json`)
                const {events} = response.data;
                
                setItems(events);

            } catch(error){
                console.log(error);
            }
        }
        return getEvent()
    }, [type]);
    return (
        <div className='events-list'>
            <UserInput 
                setType={setType}
                typeRef={typeRef}
            />
            <div className='container'>
            {
                items.map((event) => {
                    const {stats} = event;
                    return <Fragment key={v1()}>
                            <Events 
                            title={event.short_title} 
                            image = {event.performers[0].image} 
                            date={event.datetime_local.split('T').shift().split('-')} 
                            months={months}
                            score={event.score}
                            lowest_price={stats.lowest_price}
                            />
                        </Fragment>
                })
            }
            </div>
        
        </div>
    )
}

export default EventsList

// await fetch(`https://api.seatgeek.com/2/events?&venue.state=NY&client_id=MjUzNzU2NTF8MTY0MjI5NTUyNi40ODgzNzgz&per_page=100&format=json`)
//         .then((response) => response.json())
//         .then((json) => {
//         const {events} = json
//         setItems(events)
//         }
//         );