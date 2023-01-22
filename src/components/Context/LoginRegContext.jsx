import React from 'react'
import axios from 'axios'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const LoginContext = React.createContext()

export const LoginContextProvider = ({children}) => {
    const [db, setDB] = React.useState()
    const url = 'http://localhost:9000'
    const [isLogin, setLogin] = React.useState(false)
    const [mentorImage, setMentorImage] = React.useState(null)
    const [itemImage, setItemImage] = React.useState(null)
    const [regAccount, setRegAccount] = React.useState({
        name: '',
        regId: '',
        email: '',
        phone: '',
        password: ''
    })
    const [logAccount, setLogAccount] = React.useState({
        regId: '',
        password: ''
    })
    const [mentor, setMentor] = React.useState({
        name: '',
        regId: '',
        skills: '',
        campus: '',
        dept: '',
        img: ''
    })
    const [item, setItem] = React.useState({
        title: '',
        price: '',
        name: '',
        regId: localStorage.getItem('regId') | '',
        loc: '',
        rent: '',
        img: ''
    })

    const handleItemChange = (e) => {
        setItem(prevState => ({
            ...prevState, [e.target.name] : e.target.value
        }))
    }

    const handleItemConfirm = async(e) => {
        if(itemImage){
            const data = new FormData()
            const filename = Date.now() + itemImage.name
            data.append('name', filename)
            data.append('file', itemImage)
            item.img = filename
            try{
                await axios.post(`${url}/imgUpload`, data)
            }catch(error){
                console.log('Error 7: ', error)
            }
        }
    }

    const handleItemSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${url}/item`, item)
            if(res.data.success == true){
                window.location.replace('/items')
            }
        }catch(error){
            console.log('Error 11: ', error)
        }
    }

    const handleMentorRegChange = (e) => {
        setMentor(prevState => ({
            ...prevState, [e.target.name] : e.target.value
        }))
    }

    const handleMentorRegConfirm = async(e) => {
        if(mentorImage){
            const data = new FormData()
            const filename = Date.now() + mentorImage.name
            data.append('name', filename)
            data.append('file', mentorImage)
            mentor.img = filename
            try{
                await axios.post(`${url}/imgUpload`, data)
            }catch(error){
                console.log('Error 7: ', error)
            }
        }
    }

    const handleMentorRegSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${url}/mentor`, mentor)
            if(res.data.success == true){
                window.location.replace('/mentors')
            }
        }catch(error){
            console.log('Error 8: ', error)
        }
    }

    const handleLogChange = (e) => {
        setLogAccount(prevState => ({
            ...prevState, [e.target.name] : e.target.value
        }))
    }

    const handleLogSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${url}/login`, logAccount)
            if(res.data.isLogin == true){
                setLogin(true)
                localStorage.setItem('isLogin', true)
                localStorage.setItem('regId', logAccount.regId)
                window.location.replace('/home')
            }
        }catch(error){
            console.log('Error 3: ', error)
        }
    }

    const handleRegChange = (e) => {
        setRegAccount(prevState => ({
        ...prevState, [e.target.name] : e.target.value
        }))
    }

    const handleRegSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${url}/register`, regAccount)
            if(res.data.isLogin == true){
                setLogin(true)
                localStorage.setItem('regId', regAccount.regId)
                localStorage.setItem('isLogin', true)
                window.location.replace('/home')
            }
        }catch(error){
            console.log('Error 1: ', error)
        }
    }

    const handleLogOut = () => {
        setLogin(false)
        localStorage.removeItem('isLogin')
        localStorage.removeItem('regId')
        window.location.replace('/home')
    }

    const initFirebase = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyDhgEt0Fjpp0uzYdFbP_HXhf3JVc2UXnFU",
            authDomain: "cusatconnect-b86d9.firebaseapp.com",
            projectId: "cusatconnect-b86d9",
            storageBucket: "cusatconnect-b86d9.appspot.com",
            messagingSenderId: "155951954668",
            appId: "1:155951954668:web:c33358c6a50a8d3694c3c9",
            measurementId: "G-56X3CD6S3E"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        setDB(getDatabase(app))
    }
    return (
        <>
            <LoginContext.Provider value={{
                isLogin,
                setLogin,
                url, 
                handleRegSubmit,
                handleRegChange,
                handleLogChange,
                handleLogSubmit,
                handleLogOut,
                handleMentorRegChange,
                handleMentorRegSubmit,
                setMentorImage,
                handleMentorRegConfirm,
                handleItemChange,
                handleItemConfirm,
                handleItemSubmit,
                setItemImage,
                db,
                initFirebase
            }}>
                {children}
            </LoginContext.Provider>
        </>
    )
}
