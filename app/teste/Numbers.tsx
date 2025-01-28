'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function TheWinner({ winnerNumber }: any) {
  const [winner, setWinner] = useState(0)
  const array = winnerNumber
  function randomNumber(array: Array<number>) {
    const randomIndex = Math.floor(Math.random() * array.length)
    const randomElement = array[randomIndex];
    return randomElement;
  }
  function handleClick() {
    setWinner(randomNumber(array))
  }

  return (
    <>
      <Navbar/>
      <div className='flex flex-col justify-center items-center gap-4 pt-16 text-3xl mt-24'>
        <h1>Número do ganhador:</h1>
        <span>
          {winner}
        </span>
        <button onClick={handleClick} className='border-dashed border-2 border-black py-1 px-2 rounded-md'>sortear</button>
      </div>
    </>
  )
}