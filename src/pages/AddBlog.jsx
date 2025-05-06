import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    title:'',
    subtitle:'',
    description:'',
    image:''
  })

  const handleChange=(e)=>{
// const value=e.target.value
// const name=e.target.name
const {name,value}=e.target
setData({...data,[name]:name==="image" ? e.target.files[0] :value})
  }
  const createBlog=async(e)=>{
    e.preventDefault()
   const response=await axios.post('https://mern3-0.onrender.com/blog',data,{
    headers:{
      "Content-Type":"multipart/form-data"
    }
   })
   if(response.status===201){
    alert('book created successfuly!!')
    navigate('/')
   }
   else{
    alert('something went wrong!!')
   }
    
  }
  return (
  <>
  <Navbar/>
         <form className="max-w-md  mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg" onSubmit={createBlog}>
    <h2 className="text-2xl text-center font-bold mb-6">Add Blog</h2>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="title">
      Title:
    </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter your title" name="title" onChange={handleChange}/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="subtitle">
      Subtitle:
    </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder="Enter your subtitle" name="subtitle"  onChange={handleChange}/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="description">
     Description:
    </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="5" placeholder="Enter your description" name="description" onChange={handleChange}></textarea>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="image">
     Image
    </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" name="image" placeholder="Enter your image" onChange={handleChange}/>
    </div>
    <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit">
    Add
  </button>
</form>
  </>
  )
}

export default AddBlog