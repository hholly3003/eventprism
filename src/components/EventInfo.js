import React from 'react';
import Homebar from './Homebar'
import '../styles/EventInfoComponent.css'
import undconst from '../images/giphy.gif'
function EventInfo() {
  return <div className='eventinfo-teo'>
    <div className='homebar-info'>
      <Homebar />
    </div>
    <div className='submain-con'>
      <div className='title'>
          <p>Under Construction</p>
      </div>
      <div className='img-container-two'>
        <img src={undconst} alt='Under Construction!'/>
      </div> 
    </div>
  </div>;
}

export default EventInfo;
