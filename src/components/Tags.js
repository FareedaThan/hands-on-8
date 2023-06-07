import React from 'react'

const Tags = (props) => {
  const { tag } = props
  return (
    <div>
      <a
        href=""
        className="text-slate-500 p-1 text-sm border-[0.0313rem] border-slate-400 rounded-full hover:text-slate-900 font-bold "
      >
        #{tag}
      </a>
    </div>
  )
}

export default Tags
