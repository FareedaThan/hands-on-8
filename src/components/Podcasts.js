import React from 'react'

const Podcasts = (props) => {
  const { podcast } = props
  return (
    <div className="flex flex-row justify-center gap-10">
      <a className="w-1/3" href={podcast.url}>
        <img src={podcast.img} />
      </a>
      <div className="flex flex-col gap-4 w-1/3 mt-10 max-lg:w-2/3">
        <div className="flex gap-2">
          <p className="text-red-800 text-xs font-bold">{podcast.author}</p>
          <p className="text-slate-500 text-xs">{podcast.date} • </p>
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
