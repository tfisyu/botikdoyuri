'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function TheWinnerName({ winnerName }: any) {
  const [winner, setWinner] = useState('')
  const array = winnerName
  function randomName(array: Array<string>) {
    const randomElement = array[Math.floor(Math.random() * array.length)]
    return randomElement;
  }
  function handleClick() {
    setWinner(randomName(array))
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center h-[90vh] text-4xl gap-3'>
        sorteio daquele creme bem cheiroso e caro iupiiiiiii
        <div className='flex flex-col justify-center items-center gap-6 text-5xl p-14 bg-white rounded-xl'>
          <h1>nome do ganhador:</h1>
          <span className='text-pink-400'>
            {winner}
          </span>
          <button onClick={handleClick} className='border-dashed border-2 border-black py-1 px-2 rounded-md'>sortear</button>
        </div>
      </div>
    </>
  )
}