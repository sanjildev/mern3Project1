import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [data,setData]=useState({
    title:'',
    subtitle:'',
    description:'',
    image:''
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:name==='image' ? e.target.files[0] :value})
  }
  const editBlog=async(e)=>{
    e.preventDefault()
    const response=await axios.patch(`https://mern3-0.onrender.com/blog/${id}`,data,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    if(response.status===200){
      alert('photo has been edited!!')
navigate('/')
    }
    else{
      alert('something went wrong!!')
    }
  }
  const fetchSingleBlog=async()=>{
    const response=await axios.get(`https://mern3-0.onrender.com/blog/${id}`)
if(response.status===200){
setData({title:response.data.data.title,
  subtitle:response.data.data.subtitle,
  description:response.data.data.description,
  image:response.data.data.image
})
}
else{
  alert('something went wrong!!')
}
}
useEffect(()=>{
fetchSingleBlog()
},[])
  return (
    <>
    <Navbar/>
    <form class="max-w-md  mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg" onSubmit={editBlog}>
    <h2 class="text-2xl text-center font-bold mb-6">Edit Blog</h2>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="title">
      Title:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter your title" value={data.title} name="title" onChange={handleChange}/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="subtitle">
      Subtitle:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder="Enter your subtitle" name="subtitle" onChange={handleChange}  value={data.subtitle}  />
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">
     Description:
    </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="5" placeholder="Enter your description" name="description" onChange={handleChange}  value={data.description} ></textarea>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="image">
     Image
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" name="image" placeholder="Enter your image" onChange={handleChange}/>
    </div>
    <img src={data.image} alt="" srcset="" className='mb-2'/>
    <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit">
    Edit
  </button>
</form>
    </>
  )
}

export default EditBlog