import { onSnapshot, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import db, { auth } from '../utils/firebase'


function Dashboard() {
  const [user,setUser] = useState({});
  const [filteredEvents,setFilteredEvents] = useState("all")

  //getting the object only of the active user or user who is signed in
  useEffect(()=>{
    // Authenticate the user and only user who has signed in can access dashboard
    auth.onAuthStateChanged((currentUser)=>{
      if(currentUser.uid){
          setUser(currentUser.uid)   
      }else{
          alert.message("Please sign in")
      }
    })
    //Getting the data from the firestore
    onSnapshot(doc(db,"users",`${user}`), (snapshot)=>{
        let events = snapshot.data().events.map((event,id)=>({...event, id:id}))
        setFilteredEvents(events)
    },[])
  })
  return (
        <div>
            THIS IS Dashboard
        </div>
    )
}

export default Dashboard;
