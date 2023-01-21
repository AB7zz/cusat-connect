import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import mentors from '../../assets/images/botnav/mentors.png'
import events from '../../assets/images/botnav/events.png'
import cart from '../../assets/images/botnav/cart.png'
import home from '../../assets/images/botnav/home.png'
import pin from '../../assets/images/botnav/pin.png'
import { Link } from 'react-router-dom';
import './style.css'

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation className='bg-white h-16 mb-4 w-[90%] m-auto rounded-[40px] botnav' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} value={value} onChange={handleChange}>
            <Link to='/items'>
                <BottomNavigationAction
                    label="cart"
                    value="cart"
                    icon={<img src={cart} alt={cart} />}
                />
            </Link>
            <Link to='/events'>
                <BottomNavigationAction
                    label="events"
                    value="events"
                    icon={<img src={events} alt={events} />}
                />
            </Link>
            <Link to='/home'>
                <BottomNavigationAction
                    label="home"
                    value="home"
                    icon={<img src={home} alt={home} />}
                />
            </Link>
            <Link to='/mentors'>
                <BottomNavigationAction
                    label="mentors"
                    value="mentors"
                    icon={<img src={mentors} alt={mentors} />}
                />
            </Link>
            <Link to='/map'>
                <BottomNavigationAction
                    label="pin"
                    value="pin"
                    icon={<img src={pin} alt={pin} />}
                />
            </Link>
        </BottomNavigation>
    );
}