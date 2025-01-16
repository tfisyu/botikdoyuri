import Link from 'next/link'
import React from 'react'

export interface NavItemInterface {
  url: string,
  label: string,
  isActive?: boolean
}
export default function NavItems (props: NavItemInterface) {
  return (
    <li className='text-2xl'>
      <Link href={props.url} className='hover:text-white'>
        {props.label}
      </Link>
    </li>
  )
}