import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import {LoginContext} from '../Context/LoginRegContext'
import SendIcon from '@mui/icons-material/Send';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export const DisplayChats = ({from, message}) => {
    if(from == localStorage.getItem('regId')){
        return(
            <div className='flex justify-end'>
                <p className='bg-[#172D3A] px-8 py-2 text-white rounded-[20px] mt-8 mb-8 mr-3'>{message}</p>
            </div>
        )
    }else{
        return(
            <div className='flex justify-start'>
                <p className='bg-[#aaa] px-8 py-2 text-white rounded-[20px] mt-8 mb-8 ml-3'>{message}</p>
            </div>
        )
    }
}

const Chat = () => {
    const {url, initFirebase} = React.useContext(LoginContext)
    const [message, setMessage] = React.useState('')
    const [allMessages, setAll] = React.useState([])
    const [mentor, setMentor] = React.useState([])
    const id = useLocation()
    const path = id.pathname.split('/')[2]
    const navigate = useNavigate()
    React.useEffect(() => {
        if(localStorage.getItem('isLogin') != 'true'){
            navigate('/home')
        }
        initFirebase()
        const fetchMentor = async() => {
            try{
                const res = await axios.get(`${url}/mentor/${path}`)
                setMentor(res.data)
            }catch(error){
                console.log('Error 14: ', error)
            }
        }
        fetchMentor()
        readData()
    }, [])

    const readData = () => {
        console.log('triggered')
        const res2 = fetch(`https://cusatconnect-b86d9-default-rtdb.firebaseio.com/${parseInt(path)+parseInt(localStorage.getItem('regId'))}.json`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        }).then(response => { return response.json() })
        .then((data) => {
          for(let key in data) {
            setAll(allMessages => [...allMessages, {from: data[key].from, message: data[key].message}])
          }
        })
    }

    const uploadData = async(e) => {
        e.preventDefault()
        console.log('triggered')
        const res = fetch(`https://cusatconnect-b86d9-default-rtdb.firebaseio.com/${parseInt(path)+parseInt(localStorage.getItem('regId'))}.json`, 
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: localStorage.getItem('regId'),
                message: message
            })
        })
        if(res){
            console.log('message sent')
        }else{
            console.log('message not sent')
        }
        setAll(allMessages => [...allMessages, {from: localStorage.getItem('regId'), message: message}])
    }
    return (
        <div className='h-full flex flex-col'>
            <div className='flex h-[80px] bg-[#2D404D] px-3 py-3'>
                <Link to='/mentors'><ArrowCircleLeftIcon className='text-white text-xl mr-3 mt-4'/></Link>
                <img height={100} width={50} className='rounded-[50%]' src={`${url}/images/${mentor.img}`} alt="mentor" />
                <p className='text-white mt-4 ml-3'>{mentor.name}</p>
            </div>
            {allMessages && allMessages.map(data => (
              <DisplayChats from={data.from} message={data.message} />
            ))}
            <div className='flex absolute top-[840px] left-[110px]'>
                <input onChange={e => setMessage(e.target.value)} type="text" placeholder='Type something...' name='message' className='w-[100%] bg-[#ccc] text-black m-auto rounded-[25px] p-3 items-end' />
                <SendIcon onClick={uploadData} className='text-white bg-[#172D3A] rounded ml-3 mt-3 p-1'/>
            </div>
        </div>
    )
}

export default Chat