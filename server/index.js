import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Connection from './db.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
import path from 'path'
import Bcrypt from 'bcryptjs'

dotenv.config()

const __dirname = path.resolve(path.dirname(''));
const PORT = 9000
const app = express()
const username = process.env.AB7_USERNAME
const password = process.env.AB7_PASSWORD
const router = express.Router()
Connection(username, password)
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))
app.use(bodyParser.json({extended: true}))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    regId: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }, 
    phone: {
        type: String,
        required: true,
        trime: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const itemSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    price: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    regId: {
        type: String, 
        required: true
    },
    loc: {
        type: String, 
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    img: {
        type: String, 
        required: true
    }
}, {timestamps: true})

const mentorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regId: {
        type: String, 
        required: true,
        trim: true
    },
    skills: {
        type: String, 
        required: true,
        trim: true
    },
    campus: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Accounts = mongoose.model('Accounts', accountSchema)
const Items = mongoose.model('Items', itemSchema)
const Mentors = mongoose.model('Mentors', mentorSchema)

app.use('/images', express.static(path.join(__dirname, '/images')))

const imgStorage = multer.diskStorage({
    destination: 'images', 
    filename: (request, file, callback) => {
        callback(null, request.body.name)
    }
})

const imgUpload = multer({storage: imgStorage})

app.post('/imgUpload', imgUpload.single('file'), (request, response) => {
    response.status(200).json('Item File has been uploaded')
})

router.post('/register', async(request, response) => {
    try{
        const existsignup = await Accounts.findOne({regId: request.body.regId})
        if(existsignup){
            response.send({message: 'Account already exists'})
        }
        request.body.password = Bcrypt.hashSync(request.body.password, 10)
        const user = request.body
        const newUser = new Accounts(user)
        await newUser.save()
        response.send({message: 'You have successfully created an account', isLogin: true})
    }catch(error){
        console.log('Error 2: ', error)
    }
})

router.post('/login', async(request, response) => {
    try{
        console.log(request.body.regId)
        const existlogin = await Accounts.findOne({regId: request.body.regId})
        if(existlogin){
            const userPassword = existlogin.password
            const hash = Bcrypt.compareSync(request.body.password, userPassword)
            if(hash){
                response.send({message: `${request.body.regId} has successfully logged in`, isLogin: true})
            }else{
                response.send({message: 'You have entered the wrong password!', isLogin: false}) 
            }
        } else{
            response.send({message: 'This account does not exist in the database', isLogin: false})
        }
    }catch(error){
        console.log('Error 4: ', error)
    }
})

router.post('/mentor', async(request, response) => {
    try{
        const mentor = request.body
        const newMentor = new Mentors(mentor)
        await newMentor.save()
        response.send({message: 'You have successfully become a mentor', success: true})
    }catch(error){
        console.log('Error 6: ', error)
    }
})

router.get('/mentor', async(request,response) => {
    try{
        const mentors = await Mentors.find()
        response.status(200).json(mentors)
    }catch(error){
        console.log('Error 10: ', error)
    }
})

router.post('/item', async(request, response) => {
    try{
        const item = request.body
        const newItem = new Items(item)
        await newItem.save()
        response.send({message: "You have successfully added an item", success: true})
    }catch(error){
        console.log('Error 11 : ', error)
    }
})

router.get('/item', async(request, response) => {
    try{
        const items = await Items.find()
        response.status(200).json(items)
    }catch(error){
        console.log('Error 12: ', error)
    }
})