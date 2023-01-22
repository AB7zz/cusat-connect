import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import microsoft from '../../../assets/images/Internships/microsoft.png'
import google from '../../../assets/images/Internships/google.png'
import facebook from '../../../assets/images/Internships/facebook.png'
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom';


const Item = ({img, title, price, loc}) => {
  return (
    <Card className='mt-4 rounded-[20px]' sx={{ width: 120, height: 160 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          className='absolute h-full'
        />
        <CardContent className='text-sm text-white relative left-[0px] h-[135px] top-[70px] !p-[0.2rem] bg-black bg-opacity-40'>
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

const Internships = () => {
  return (
    <div className='bg-[#172D3A] h-250px py-3'>
      <div className='flex px-5 justify-between'>
        <h1 className='text-white font-extrabold oxaniumfont'>Internship Offers</h1>
        <Link to='/items' className='text-[#0085FF]'>See all</Link>
      </div>
      <div className='flex flex-row justify-evenly'>
        <Item img={google} title="SWE Intern Google" price={200} loc="Bangalore, India" />
        <Item img={microsoft} title="SWE Intern Microsoft" price={20000} loc="Kochi, India" />
        <Item img={facebook} title="SWE Intern Facebook" price={150} loc="Bangalore, India" />
      </div>
    </div>
  )
}

export default Internships