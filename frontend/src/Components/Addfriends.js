import React,{useState} from 'react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Addfriends.css'

function Addfriends() {

    const [id,setId] = useState('')
    const [name,setName] = useState('')

    const onSubmit = ()=>{
        fetch('/friends',{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id,
                name
            })
        }).then(res=>res.json())
        .then(data=>{
            
            toast('Successfully added...')
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (<>
        
    <div className='addfriendscontainer' >
        <div className='addfriends' >
        <h1 className='id'>Id :</h1>
        <input className='inputfield' value={id} onChange={(e)=>setId(e.target.value)} ></input>
        </div>
        <div className='addfriends' >
        <h1>Name :</h1>
        <input className='inputfield' value={name} onChange={(e)=>setName(e.target.value)} ></input>
        </div>
        <div className='addfriends' >
        <button className='button' onClick={()=>onSubmit()} >Add Friend</button>
        <ToastContainer/>
        </div>
    </div>
    </>
  )
}

export default Addfriends