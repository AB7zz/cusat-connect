import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import pic1 from '../../../assets/images/usednb/1.png'
import pic2 from '../../../assets/images/usednb/2.jpg'
import pic3 from '../../../assets/images/usednb/3.jpg'
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom';


const Nb = ({img, title, price, loc}) => {
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

const UsedNb = () => {
  return (
    <div className='bg-[#172D3A] h-250px py-3'>
      <div className='flex px-5 justify-between'>
        <h1 className='text-white font-extrabold oxaniumfont'>Used Notes</h1>
        <Link to='/items' className='text-[#0085FF]'>See all</Link>
      </div>
      <div className='flex flex-row justify-evenly'>
        <Nb img={pic1} title="DCS Notes" price={0} loc="Kochi" />
        <Nb img={pic2} title="LATT Notes" price={0} loc="Kochi" />
        <Nb img={pic3} title="ENG MECH NOTES" price={0} loc="Kochi" />
      </div>
    </div>
  )
}

export default UsedNb