import React from "react";
import styled from "styled-components";

const Event = () => {
  return (
    <div>
      <Card>
        <DisplayBanner>
          <Banner src="" alt=""></Banner>
        </DisplayBanner>
        <EventInfo>
          <Title>Event Title</Title>
          <DateAndTime> Date and Time of Event</DateAndTime>
          <Address> Address of Event</Address>
          <Fee> $$$ said person will be charged</Fee>
          <EventThrowerAndPopularity>
            <HostContainer>
              <Host>Host of the Event</Host>
            </HostContainer>
            <Popularity>
              <Icon></Icon>
              <Followers> Number of Followers</Followers>
            </Popularity>
          </EventThrowerAndPopularity>
        </EventInfo>
      </Card>
    </div>
  );
};

export default Event;

const Card = styled.div`
  max-width: 300px;
  background-color: yellow;
`;
const DisplayBanner = styled.div`
  height: 125px;
  width: 100%;
  background-color: orange;
`;

const Banner = styled.img``;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

const Title = styled.a``;

const DateAndTime = styled.div``;

const Address = styled.div``;

const Fee = styled.div``;

const EventThrowerAndPopularity = styled.div``;

const HostContainer = styled.div``;

const Host = styled.div``;

const Popularity = styled.div``;

const Icon = styled.img``;

const Followers = styled.div``;
