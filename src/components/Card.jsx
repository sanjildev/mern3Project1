import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({blog}) => {
  return (
   <>
   <Link to={`/blog/${blog._id}`}>
    <div className="flex px-3 py-3 m-9">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-100 object-cover" src={blog.image} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">
                {blog.description}
            </p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </div>
</div>
</Link>
   </>
  )
}

export default Card