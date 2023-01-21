import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Navbar from '../Home/Navbar/Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import bike from '../../assets/images/items/bike.jpg'
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { LoginContext } from '../Context/LoginRegContext';

const Item = ({url, phone, img, price, title, desc}) => {
  return (
    <Card className='ml-2 mt-8 rounded-[20px]' sx={{ width: 190, height: 160 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={`${url}/images/${img}`}
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
            <p className='text-xs text-white text-sm'> {desc}</p>
          </Typography>
          <Typography className='bg-black'>
            +91 {phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Items = () => {
  const {url} = React.useContext(LoginContext)
  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    const fetchItems = async() => {
      const res = await axios.get(`${url}/item`)
      setItems(res.data)
    }
    fetchItems()
  }, [])
  return (
    <>
      <Navbar/>
      <div className='p-5 flex'>
        <Link to='/itemUpload' className='m-auto bg-[#172D3A] bg-opacity-50 text-white px-8 py-2 rounded-[15px]'>Do you want to upload an Item?</Link>
      </div>
      <div className='p-3 mb-24 grid grid-cols-2'>
        {items.map((item,key) => (
          <Item url={url} phone="9778393558" img={item.img} price={item.price} title={item.title} desc={item.desc}  />
        ))}
        
      </div>
      <BottomNav/>
    </>
  )
}

export default Items