import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Navbar from '../Home/Navbar/Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import lib from '../../assets/images/hubspots/lib.jpg'
import amt from '../../assets/images/hubspots/amt.jpg'
import cr from '../../assets/images/hubspots/cr.jpg'
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Hubspot = ({img, title, stars, km}) => {
  return (
    <Card className='ml-2 mt-8 rounded-[20px]' sx={{ width: 190, height: 160 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={img}
          alt="green iguana"
          className='absolute h-full'
        />
        <CardContent className='relative left-[0px] h-[135px] top-[70px] !p-[0.2rem] bg-black bg-opacity-40'>
          <p className='text-sm text-white'>{title}</p>
          <Typography variant="body2" color="text.secondary">
            {
              stars.map(val => {
                val == 1 ? (<StarIcon className='text-sm text-[#FFD601]'/>) : (<StarBorderIcon className='text-sm text-[#FFD601]'/>)
              })
            }
            <StarIcon className='text-sm text-[#FFD601]'/>
            <StarIcon className='text-sm text-[#FFD601]'/>
            <StarIcon className='text-sm text-[#FFD601]'/>
            <StarBorderIcon className='text-sm text-[#FFD601]'/>
            <StarBorderIcon className='text-sm text-[#FFD601]'/>
          </Typography>
          <Typography className='flex relative top-[0.5px] bottom-[10px]'>
            <PinDropIcon className='text-[#cccc] text-sm' />
            <p className='text-xs text-white text-sm'> {km} Km</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Hubspots = () => {
  return (
    <>
      <Navbar/>
      {/* <div className='p-5 flex'>
        <Link to='/itemUpload' className='m-auto bg-[#172D3A] bg-opacity-50 text-white px-8 py-2 rounded-[15px]'>Do you want to upload an Item?</Link>
      </div> */}
      <div className='p-3 mb-24 grid grid-cols-2'>
        <Hubspot img={lib} title="University Library" stars={[1,1,1,0,0]} km={2.1} />
        <Hubspot img={cr} title="CUSAT Restaurant" stars={[1,1,1,0,0]} km={2.1} />
        <Hubspot img={amt} title="Amenity Centre" stars={[1,1,1,0,0]} km={2.1} />
      </div>
      <BottomNav/>
    </>
  )
}

export default Hubspots