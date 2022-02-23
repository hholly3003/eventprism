import React, {useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import Homebar from './Homebar'
import '../styles/EventInfoComponent.css'
import undconst from '../images/giphy.gif'
import axios from 'axios';

function EventInfo() {
  let params = useParams();
  const [info, setInfo] = useState({});
  const [renderInfo, setRenderInfo] = useState(false);
  const client_id = "MjUzNzU2NTF8MTY0MjI5NTUyNi40ODgzNzgz";
  useEffect(() => {
    const getResponse = async () => {
      if(params){
        try{
          const response = await axios.get(`https://api.seatgeek.com/2/events/${params.id}?geoip=true&client_id=${client_id}&per_page=10&format=json`);
          setInfo(response.data);
          setRenderInfo(true);
          console.log(info)
        } catch(error) {
          console.log(error);
        }
      }
    } 
    getResponse()
  }, [renderInfo]);

  // let date = info.datetime_local.split("T").shift().split("-");

  const checkPrice = (lowest_price) => {
    let variable = "";
    if(lowest_price == null) {
      variable = `No Price Avalible`
      return variable;
    } else {
      variable = `Lowest $${lowest_price}`
      return variable;
    }
  }

  return <div className='eventinfo-component'>
    <div className='homebar-info'>
      <Homebar />
    </div>
    <div className='submain-con'>
      <div className='info-submain-container'>
        <div className='title-image'>
            <img id='info-image-title'/>
        </div>
        <div className='information-container'>
          <div className='title-info-component'>
            <p>{info.short_title}</p>
          </div>

          <div className='date-time-rating-info-component'>
            <div className='date-time-info-component'>
              <p>date</p>
              <p>Time</p>
            </div>
            <div className='rating-info-component'>
              <p>Rating</p>
            </div>
          </div>
        
          <div className='venue-info-component'>
            <p>Venue</p>
            <p>Address 1</p>
            <p>Address 2</p>
          </div>

          <div className='price-info-component'>
            <p>Lowest Price:</p>
          </div>

          <div className='link-info-component'>
            <p>URL</p>
          </div>
        </div>
        
      </div>
      <div className='google-map-container'>
        <h1>Google Maps</h1>
        </div>
    </div>
  </div>;
}

export default EventInfo;
