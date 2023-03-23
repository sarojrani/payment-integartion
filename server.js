import {app} from './app.js';
import { connectDB } from './config/database.js';
import Razorpay from 'razorpay';
connectDB()
export const instance=new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
})


let port=process.env.PORT || 4000
app.listen(port,()=>
console.log(`server is working on ${port}`))