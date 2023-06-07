import React from 'react'

const Podcasts = (props) => {
  const { podcast, num } = props
  return (
    <div className="flex flex-row justify-center gap-10 max-lg:flex-col items-center">
      <a className="w-1/3 transition duration-300 ease-in-out hover:opacity-70 max-lg:w-4/5 " href={podcast.url}>
        <img src={podcast.img} />
      </a>
      <div className="flex flex-col gap-4 w-1/3 mt-5 max-lg:w-4/5 max-lg:mt-0 max-lg:mb-10">
        <div className="flex gap-2">
          <p className="text-red-800 text-xs font-bold">{podcast.author}</p>
          <p className="text-slate-500 text-xs">{podcast.date}• </p>
          <p className="text-slate-500 text-xs">{podcast.readingTime}</p>
        </div>
        <a href={podcast.url} className="text-lg font-black text-left hover:text-xl">
          {podcast.header}
        </a>
        <p className="text-slate-600 text-sm font-semibold text-left">{podcast.description}</p>
      </div>
    </div>
  )
}

export default Podcasts
