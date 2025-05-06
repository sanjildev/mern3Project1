import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [singleBLog,setSingleBlog]=useState({})
    const fetchSingleBlog=async()=>{
        const response=await axios.get(`https://mern3-0.onrender.com/blog/${id}`)
        setSingleBlog(response.data.data)
    }
    const deleteBlog=async()=>{
        const response=await axios.delete(`https://mern3-0.onrender.com/blog/${id}`)
        if(response.status===200){
            alert("your photo has been deleted successfully!!")
            navigate('/')
        }
        else{
            alert('something went wrong!!,Sorry:(')
        }
    }
    useEffect(()=>{
fetchSingleBlog()
    },[])
  return (

   <>
   <Navbar/>
   <div className="bg-gray-100 dark:bg-gray-800 flex items-center py-8 h-250">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  flex-col  md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={singleBLog.image} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <Link to={`/editBlog/${id}`} > <button className="w-full cursor-pointer bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit Photo</button></Link>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteBlog}>Delete Photo</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{singleBLog.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {singleBLog.subtitle}
                </p>
            
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Photo Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {singleBLog.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

   </>
  )
}

export default SingleBlog