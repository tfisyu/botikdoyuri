'use client'

import React from 'react'
import NavItems, { NavItemInterface } from './NavItems'
import { usePathname } from 'next/navigation'

export default function Navbar () {
  const items: NavItemInterface[] = [
    {
      url: '/',
      label: 'início'
    },
    {
      url: '/sorteios',
      label: 'sorteios'
    },
    {
      url: '/fidelidade',
      label: 'fidelidade'
    },
    {
      url: '/pronta-entrega',
      label: 'pronta entrega'
    }
  ]

  const pathname = usePathname()

  return (
    <header>
      <nav>
        <ul className='py-4 flex flex-row justify-around ul-nav'>
          {items.map((item, index) => (
            <NavItems
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}