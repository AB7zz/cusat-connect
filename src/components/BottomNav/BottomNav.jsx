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
        <BottomNavigation className='bg-white h-20 rounded-[40px] botnav' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} value={value} onChange={handleChange}>
            <Link to='/'>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<img src={cart} alt={cart} />}
                />
            </Link>
            <Link to='/page2'>
                <BottomNavigationAction
                    label="Sail"
                    value="sail"
                    icon={<img src={events} alt={events} />}
                />
            </Link>
            <Link to='page3'>
                <BottomNavigationAction
                    label="Radar"
                    value="radar"
                    icon={<img src={home} alt={home} />}
                />
            </Link>
            <Link to='page4'>
                <BottomNavigationAction
                    label="AR"
                    value="ar"
                    icon={<img src={mentors} alt={mentors} />}
                />
            </Link>
            <Link to='page4'>
                <BottomNavigationAction
                    label="AR"
                    value="ar"
                    icon={<img src={pin} alt={pin} />}
                />
            </Link>
        </BottomNavigation>
    );
}