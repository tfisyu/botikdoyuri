'use client'

import React, { useState, useRef } from "react";
import submitData from '../actions';

const AddParticipant: React.FC = () => {
  const buttonRef: { current: null | HTMLButtonElement } = useRef(null);
  const [name, setName] = useState('');
  const [num, setNum] = useState('');

  const generateNum = (min: number, max: number) => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };

  const handleClick = () => {
    if (buttonRef.current && !buttonRef.current.disabled) {
      buttonRef.current.disabled = false;
      setNum(generateNum(1, 200).toString());
    };
  }

  return (
    <div>
      <form action={submitData} className='flex flex-col w-[20vw] m-auto'>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          name='name'
          placeholder='nome do participante'
          className='border rounded px-3 py-2 text-2xl text-black'
          required
        />
        <div className='flex flex-row justify-between items-center'>
          <input
            type="text"
            name='number'
            value={[num]}
            readOnly
            className='border rounded px-3 py-2 text-2xl text-black'
            required
          />
          <button
            onClick={handleClick}
            ref={buttonRef}
            type='button'
            className='bg-red-300 px-3 py-2 rounded text-white ml-4 text-2xl'
          >
            generate number
          </button>
        </div>
        <input disabled={!num || !name} type="submit" value="adicionar" className='h-10 bg-red-300 px-5 rounded text-white text-2xl cursor-pointer' />
      </form>
    </div>
  );
};

export default AddParticipant;