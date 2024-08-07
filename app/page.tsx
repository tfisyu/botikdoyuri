import prisma from '@/lib/prisma'
import React from 'react'
import AddParticipant from './components/create'

export default async function Page() {
  const participants = await prisma.participant.findMany()
  return (
    <div>
      nome desses bostas:
      {participants.map((participant) => {
        return (
          <ul key={participant.id}>
            {participant.name}
            <li>
              {participant.number.join(', ')}
            </li>
            <br />
          </ul>
        )
      })}
      <div>
        AGORA VOCÊ PODE ADICIONAR CORNOS NO SEU SITE. CONFIRA ABAIXO:
        <AddParticipant />
      </div>
    </div>
  )
}
