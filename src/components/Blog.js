import React from 'react'
import Tags from './Tags'

const Blog = (props) => {
  const { blog } = props
  return (
    <div className="flex flex-col gap-4 w-1/3 max-lg:w-2/3">
      <div className="flex gap-2">
        <p className="text-red-800 text-xs font-bold">{blog.author}</p>
        <p className="text-slate-500 text-xs">{blog.date} • </p>
        <p className="text-slate-500 text-xs">{blog.readingTime}</p>
      </div>
      <a href={blog.url} className="text-lg font-black text-left hover:text-xl">
        {blog.header}
      </a>
      <p className="text-slate-600 text-sm font-semibold text-left">{blog.description}</p>
      <div className="flex gap-4">
        {blog.tags.map((tag, index) => {
          return <Tags key={index} tag={tag} />
        })}
      </div>
    </div>
  )
}

export default Blog
