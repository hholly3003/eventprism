import React, {useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import Homebar from './Homebar'
import '../styles/EventInfoComponent.css'
import axios from 'axios';

function EventInfo() {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  let params = useParams();
  const [info, setInfo] = useState({});
  const [renderInfo, setRenderInfo] = useState(false);
  const client_id = "MjUzNzU2NTF8MTY0MjI5NTUyNi40ODgzNzgz";
  useEffect(() => {
    const getResponse = async () => {
        try{
          const response = await axios.get(`https://api.seatgeek.com/2/events/${params.id}?geoip=true&client_id=${client_id}&per_page=10&format=json`);
          setInfo(response.data);
          setRenderInfo(true);
          console.log(info)
        } catch(error) {
          console.log(error);
        }
    } 
    getResponse()
  }, [renderInfo]);

  // let date = info.datetime_local.split("T").shift().split("-");
  const getDate = () => {
    let date = '';
    if(info.datetime_local){
      date = info.datetime_local.split("T").shift().split("-");
    }
    return date = `${months[date[1] - 1]} ${date[2]}`;
  }
  const getTime = () => {
    let time = '';
    if(info.datetime_local){
      time = info.datetime_local.split("T").pop().split(':');
    }
    console.log(time)
    if(time[0] >= 12){
      time = `${hours[time[0] - 1] - 12}:${time[1]} pm`;
    } else {
      time = `${hours[time[0] - 1] - 12}: ${time[1]}`;
    }
    return time;
  }

  const checkPrice = () => {
    let variable = "";
    if(info.stats){
      if(info.stats.lowest_price == null) {
        variable = `No Price Avalible`
        return variable;
      } else {
        variable = `Lowest $${info.stats.lowest_price}`
        return variable;
      }
    }
  }
  const getImageOrUrl = (n) => {
    let imgOrUrl = ''
    if(info.performers){
      if(n == 1){
        imgOrUrl = info.performers[0].image;
      } else if (n == 2) {
        imgOrUrl = info.performers[0].url;
      }
    }
    return imgOrUrl;
  }
  const getAddress = (n) => {
    let adr = ''
    if(info.venue){
      if(n == 1){
        adr = info.venue.address;
      } else if(n == 2){
        adr = info.venue.extended_address;
      }
    }
    return adr;
  }

  return <div className='eventinfo-component'>
    <div className='homebar-info'>
      <Homebar />
    </div>
    <div className='submain-con'>
      <div className='info-submain-container'>
        <div className='title-image'>
            <img id='info-image-title' src={getImageOrUrl(1)}/>
        </div>
        <div className='information-container'>
          <div className='title-info-component'>
            <p>{info.short_title}</p>
          </div>

          <div className='date-time-rating-info-component'>
            <div className='date-time-info-component'>
              <p>{getDate()}</p>
              <p>{getTime()}</p>
            </div>
            <div className='rating-info-component'>
              <p>{info.score * 10}</p>
            </div>
          </div>
        
          <div className='venue-info-component'>
            <p>Venue:</p>
            <p>{getAddress(1)}</p>
            <p>{getAddress(2)}</p>
          </div>

          <div className='price-info-component'>
            <p>{`Lowest Price: ${checkPrice()}`}</p>
          </div>

          <div className='link-info-component'>
            <a>{getImageOrUrl(2)}</a>
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
