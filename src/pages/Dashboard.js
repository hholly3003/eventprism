import React from 'react';

function Dashboard() {
  const [user,setUser] = useState({})
  
  //getting the object only of the active user or user who is signed in
  useEffect(()=>{
    auth.onAuthStateChanged((currentUser)=>{
      if(currentUser.uid){
          setUser(currentUser.uid);
          
      }
    })
  })
  return (
        <div>
            THIS IS Dashboard
        </div>
    )
}

export default Dashboard;
