import React from 'react';
import axios from 'axios';
import Card from './Card';
import {Box,Stack} from "@chakra-ui/react";
function Home() {
    const checkoutHandler=async (amount)=>{
  const {data: {key} } = await axios.get("http://localhost:4000/api/getkey")

   const { data:{ order }}  = await axios.post("http://localhost:4000/api/checkout",{
    amount
  })
  
  const options = {
    key, 
    amount: order.amount, 
    currency: "INR",
    name: "saroj kumari",
    description: "Test Transaction",
    image: "https://images.unsplash.com/photo-1502219684198-fa9b5164d9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    order_id: order.id, 
    callback_url: "http://localhost:4000/api/paymentVerification",
    prefill: {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#3399cc"
    }
};

const razor = new window.Razorpay(options);

razor.open();

    }
  return (
   <Box>
    <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
    <Card  amount={2500} img={"https://poshace.com/pub/media/catalog/product/cache/95ca844a72e649bb1089a2da1cdcef7d/c/c/ccccccccccccccccccccc.jpg"} checkoutHandler={checkoutHandler}/>
    <Card  amount={2000} img={"https://rukminim1.flixcart.com/image/416/416/kpzt7680/screen-guard/front-and-back-screen-guard/w/e/q/mp-03-rayina-tech-original-imag43fzh9zs9jyq.jpeg?q=70"} checkoutHandler={checkoutHandler}/>
    <Card  amount={5000} img={"https://img5.gadgetsnow.com/gd/images/products/additional/large/G401887_View_1/electronics/digital-cameras/sony-a7-iii-full-frame-mirrorless-interchangeable-lens-camera-with-28-70mm-f3-5-5-6-oss-lens-.jpg"} checkoutHandler={checkoutHandler}/>
   
    </Stack>
   </Box>
  )
}

export default Home