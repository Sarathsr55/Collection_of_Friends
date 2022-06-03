import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Friendprofile.css'

function Friendprofile() {

    const [friend,setFriend] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`/friends/${id}`)
        .then(res=>res.json())
        .then(result=>{
            setFriend(result)
        })
    },[])


  return (
    <div className='friend-container' >
        <h1>Id : {friend.id}</h1>
        <h1>Name : {friend.name}</h1>
    </div>
  )
}

export default Friendprofile