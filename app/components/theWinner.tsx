'use client'

import { Button } from 'antd';
import React, { useState } from 'react'

export default function TheWinner() {
  const [winner, setWinner] = useState(0)
  const array = [128, 93, 193, 136, 172, 91, 28, 36, 37, 158, 108, 134, 59, 53, 111, 148, 16, 60, 147, 189, 143, 68, 115, 18, 135, 181, 182, 152, 199, 112, 100, 119, 191];
  function randomNumber(array: Array<number>) {
    const randomIndex = Math.floor(Math.random() * array.length)
    const randomElement = array[randomIndex];
    return randomElement;
  }
  function handleClick() {
    setWinner(randomNumber(array))
  }

  return (
    <div className='flex flex-col justify-center items-center gap-4 pt-16 text-3xl'>
      <h1>QUEM VAI LEVAR OS 250 REAIS?</h1>
      <span>
        {winner}
      </span>
      <Button onClick={handleClick}>sortear</Button>
    </div>
  )
}
