import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import lib from '../../../assets/images/hubspots/lib.jpg'
import cr from '../../../assets/images/hubspots/cr.jpg'
import amt from '../../../assets/images/hubspots/amt.jpg'
import PinDropIcon from '@mui/icons-material/PinDrop';
import {Link} from 'react-router-dom'

const Hubspot = ({img, title, stars, km}) => {
  return (
    <Card className='mt-4 rounded-[20px]' sx={{ width: 120, maxHeight: 140 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          className='absolute h-full'
        />
        <CardContent className='relative left-[7px] h-[135px] top-[70px] !p-[0.2rem] bg-black bg-opacity-40'>
          <p className='text-sm text-white'>{title}</p>
          <Typography variant="body2" color="text.secondary">
            {
              stars.map(val => {
                val ? (<StarIcon className='text-sm text-[#FFD601]'/>) : (<StarBorderIcon className='text-sm text-[#FFD601]'/>)
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
    <div className='bg-white h-250px py-3 rounded-b-[15px] mb-3'>
      <div className='flex px-5 justify-between'>
        <h1 className='text-[#172D3A] font-extrabold oxaniumfont'>Hubspots near by</h1>
        <Link to='/hubspots' className='text-[#0085FF]'>See all</Link>
      </div>
      <div className='flex flex-row justify-evenly'>
        <Hubspot img={lib} title="University Library" stars={[1,1,1,0,0]} km={2.1} />
        <Hubspot img={cr} title="CUSAT Restaurant" stars={[1,1,0,0,0]} km={2.1} />
        <Hubspot img={amt} title="Aminity Center" stars={[1,1,1,1,0]} km={2.1} />
      </div>
    </div>
  )
}

export default Hubspots