import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Home = () => {
  const [blogs,setBlogs]=useState([])
    const fetchBlogs=async()=>{
        const response=await axios.get('http://localhost:3000/blog')
        setBlogs(response.data.data)
    }
    useEffect(()=>{
        fetchBlogs()
    },[])
  return (

    <>
     <Navbar/>
    <div className='flex justify-center flex-wrap'>
    {
      blogs.map((blog,key)=>{
return(<Card blog={blog} key={key}/>)
      })
    }
  
    </div>
    </>
  )
}

export default Home