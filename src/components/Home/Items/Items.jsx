import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import mini from '../../../assets/images/Items/minidrafter.jpg'
import bike from '../../../assets/images/Items/bike.jpg'
import rlescle from '../../../assets/images/Items/rlescle.jpg'
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom';


const Item = ({img, title, price, loc}) => {
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
        <CardContent className='text-sm text-white relative left-[7px] h-[135px] top-[70px] !p-[0.2rem] bg-black bg-opacity-40'>
          {title}
          <Typography className='text-white text-xs'>
            ₹ {price}
          </Typography>
          <Typography className='flex relative top-[0.5px] bottom-[10px]'>
            <PinDropIcon className='text-[#cccc] text-sm' />
            <p className='text-xs text-white text-sm'> {loc}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Items = () => {
  return (
    <div className='bg-[#172D3A] h-250px py-3 mb-24'>
      <div className='flex px-5 justify-between'>
        <h1 className='text-white font-extrabold oxaniumfont'>Items for sale</h1>
        <Link to='/items' className='text-[#0085FF]'>See all</Link>
      </div>
      <div className='flex flex-row justify-evenly'>
        <Item img={mini} title="Mini Drafter" price={200} loc="Kochi" />
        <Item img={bike} title="Bike" price={20000} loc="Kochi" />
        <Item img={rlescle} title="Scale" price={150} loc="Kochi" />
      </div>
    </div>
  )
}

export default Items