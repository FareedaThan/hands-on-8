import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Podcasts from './components/Podcasts'

// blog data
const blogs = [
  {
    id: 1,
    header: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    date: 'Nov 26th, 2022',
    readingTime: '3 min',
    url: 'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    id: 2,
    header: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    date: 'Apr 26th, 2022',
    readingTime: '9 min',
    url: 'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
  {
    id: 3,
    header: 'Solidity Made Easy with Hardhat',
    description: 'A walkthrough guide on how to use Hardhat to develop a smart contract with ease!',
    tags: ['hardhat', 'tutorial'],
    author: 'Aikdanai',
    date: 'Aug 5th, 2022',
    readingTime: '6 min',
    url: 'https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb',
  },
  {
    id: 4,
    header: 'Solving DApps Problem with Merkle drop',
    description:
      'When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?',
    tags: ['smart contract', 'web3'],
    author: 'Nutchanon',
    date: 'Sep 27th, 2022',
    readingTime: '8 min',
    url: 'https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942',
  },
]

// Podcasts data
const podcasts = [
  {
    id: 1,
    header: 'THE EXPECTATION EP1 : Senior Developer - Management Overhead',
    description:
      'What are the expectations for a senior developer versus a junior developer? What does the company expect from each developer path? How can I advance to senior developer as soon as possible? Let’s find out the answers in this interview!!!',

    author: 'Panjamapong',
    date: 'Apr 9th, 2021',
    readingTime: '6 min',
    url: 'https://www.youtube.com/watch?v=cuZdfMm2iPI&ab_channel=Cleverse',
    img: 'https://cleverse.com/_next/image?url=%2Fthumbnail%2Fvdo%2Fthe-expectation-ep1.jpg&w=828&q=75',
  },
  {
    id: 2,
    header: 'THE EXPECTATION EP5 : Junior Developer - Survival Skill',
    description:
      '"Get stuck in my work. See no way out. What should I do?" Unsure on your own system design? How do we solve these problems? Let’s find out the answers in this interview!!!',

    author: 'Jackpat',
    date: 'Jul 16th, 2021',
    readingTime: '5 min',
    url: 'https://www.youtube.com/watch?v=9vr6PidRAko&ab_channel=Cleverse',
    img: 'https://cleverse.com/_next/image?url=%2Fthumbnail%2Fvdo%2Fthe-expectation-ep5.jpg&w=828&q=75',
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-around gap-96 mb-4 mt-10 max-xl:gap-24">
        <p className="text-slate-500 font-semibold text-lg">Blog</p>
        <a className="text-red-800 text-xs font-bold" href="">
          View all
        </a>
      </div>
      <div className="flex flex-wrap gap-10 justify-around mb-20 mx-40 max-xl:mx-10 max-lg:mx-5">
        {blogs.map((blog) => {
          return <Blog key={blog.id} blog={blog} />
        })}
      </div>
      <div className="flex justify-around gap-96 mb-4 mt-10 max-xl:gap-40">
        <p className="text-slate-500 font-semibold text-lg">Podcast</p>
        <a className="text-red-800 text-xs font-bold" href="">
          View all
        </a>
      </div>
      <div className="flex flex-col gap-10 mb-20">
        {podcasts.map((podcast) => {
          return <Podcasts key={podcast.id} podcast={podcast} num={1} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
