import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Navbar from '../Home/Navbar/Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import bg from '../../assets/images/mentors/bg.png'
import mark from '../../assets/images/mentors/mark.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../Context/LoginRegContext';


export const Mentor = ({url, name, skills, img, dept, campus, regId}) => {
  return(
    <div>
      <Card className='mb-3 bg-cover bg-center rounded-[15px] mentorcard' style={{backgroundImage: `url(${bg})`}} sx={{ width: 190, height: 330 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${url}/images/${img}`}
            alt="green iguana"
            className='rounded-[50%] w-[100px] h-[100px] m-auto mt-4 mb-10'

          />
          <CardContent className='bg-[#1C3646]'>
            <Typography className='text-white text-base opacity' gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography className='text-white text-sm opacity-[0.7]' variant="body2" color="text.secondary">
              {campus}
            </Typography>
            <Typography className='text-white text-sm opacity-[0.7]' variant="body2" color="text.secondary">
              {dept}
            </Typography>
            <Typography className='text-white text-sm opacity-[0.7]' variant="body2" color="text.secondary">
              Skills: {skills}
            </Typography>
            <Typography className='ml-6 mt-6'>
              <Link className='bg-[#7A92AF33] text-white opacity-[0.7] px-6 py-2 rounded-[20px] text-sm' to={`/chat/${regId}`}>Chat <ChatIcon /> </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

const Mentors = () => {
  const {url} = React.useContext(LoginContext)
  const [mentors, setMentors] = React.useState([])
  React.useEffect(() => {
    const fetchMentors = async() => {
      try{
        const res = await axios.get(`${url}/mentor`)
        setMentors(res.data)
      }catch(error){
        console.log('Error 9: ', error)
      }
    }
    fetchMentors()
  }, [])
  return (
    <>
      <Navbar/>
      <div className='p-5 flex'>
        <Link to='/mentorRegistration' className='m-auto bg-[#172D3A] bg-opacity-50 text-white px-8 py-2 rounded-[15px]'>Do you want to become a mentor?</Link>
      </div>
      <div className='grid grid-cols-2 p-4 mb-24'>
        {mentors.map((mentor, key) => (
            mentor.regId != localStorage.getItem('regId') && <Mentor url={url} name={mentor.name} skills={mentor.skills} img={mentor.img} dept={mentor.dept} campus={mentor.campus} regId={mentor.regId} />
        ))}
      </div>
      <BottomNav/>
    </>
  )
}

export default Mentors