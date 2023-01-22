import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import {Link} from 'react-router-dom'
import mark from '../../../assets/images/mentors/mark.png'
import bg from '../../../assets/images/mentors/bg.png'

const Mentor = () => {
  return(
    <div>
      <Card className='bg-cover bg-center rounded-[15px] mentorcard' style={{backgroundImage: `url(${bg})`}} sx={{ width: 190, height: 330 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={mark}
            alt="green iguana"
            className='rounded-[50%] w-[100px] m-auto mt-4'

          />
          <CardContent className='bg-[#1C3646]'>
            <Typography className='text-white text-base opacity' gutterBottom variant="h5" component="div">
              Abhinav C V
            </Typography>
            <Typography className='text-white text-sm opacity-[0.7]' variant="body2" color="text.secondary">
              School of Engineering
            </Typography>
            <Typography className='text-white text-sm opacity-[0.7]' variant="body2" color="text.secondary">
              BTech IT
            </Typography>
            <Typography className='text-white text-sm opacity-[0.7]' variant="body2" color="text.secondary">
              Skills: C, Python, ReactJS
            </Typography>
            <Typography className='ml-6 mt-6'>
              <Link className='bg-[#7A92AF33] text-white opacity-[0.7] px-6 py-2 rounded-[20px] text-sm' to='/chat'>Chat <ChatIcon /> </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

const Mentors = () => {
  return (
    <div className='bg-white py-3 rounded-[15px] mb-24'>
      <div className='flex px-5 justify-between'>
        <h1 className='ml-5 text-[#172D3A] font-extrabold oxaniumfont mb-8'>Mentors</h1>
        <Link to='/mentors' className='text-[#0085FF]'>See all</Link>
      </div>
      <div className='flex justify-around'>
        <Mentor />
        <Mentor />
      </div>
    </div>
  )
}

export default Mentors