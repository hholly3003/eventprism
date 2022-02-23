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
          console.log(info);
        } catch(error) {
          console.log(error);
        }
      }
    } 
    getResponse()
  }, [renderInfo]);

  const image = info.performers[0].image;

  return <div className='eventinfo-component'>
    <div className='homebar-info'>
      <Homebar />
    </div>
    <div className='submain-con'>
      <div className='info-submain-container'>
        <div className='title-image'>
            <img id='info-image-title'src={image}/>
        </div>
        <div className='information-container'>
          
        </div>
        
      </div>
      <div className='google-map-container'>
        <h1>Google Maps</h1>
        </div>
    </div>
  </div>;
}

export default EventInfo;
