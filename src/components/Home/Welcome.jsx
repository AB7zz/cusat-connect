import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/static/logo-welcome.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './style.css'
import bg from '../../assets/images/static/bg.png'

const Welcome = () => {
    const particlesInit = React.useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <div className='bg-cover bg-center h-screen flex flex-col justify-center' style={{backgroundImage: `url(${bg})`}}>
                <img className='m-auto ml-10 mt-40' src={logo} alt="logo" />
                <Link className='metrofont bg-[#172D3A] m-auto rounded-[25px] text-white px-12 py-4' to='/login'>Make CUSAT simpler <ArrowCircleRightIcon/> </Link>
            </div>
        </>
    )
}

export default Welcome