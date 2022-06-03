import React,{useState,useEffect} from 'react'
import './Friendslist.css'

function Friendslist() {
    const [friends,setFriends] = useState([])

    useEffect(()=>{
        fetch('/friends')
        .then(response => response.json())
        .then(data => setFriends(data.friends))
    },[])

  return (
    <div className='friendslist'>
        {friends.map(obj=>{
            return(
                <div className='friends' >
                    <h1>Id: {obj.id}</h1>
                    <h1>Name: {obj.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Friendslist