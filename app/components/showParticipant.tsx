import prisma from '@/lib/prisma'
import { Card, Col, Row } from 'antd'
import React from 'react'

export default async function showParticipant () {
    const participants = await prisma.participant.findMany()
    
  return (
    <div>
      <Row gutter={24}>
        {participants.map((participant) => (
          <Col span={4} key={participant.id}>
            <Card title={participant.name} bordered={true} size='default' className='mt-4'>
              {participant.number.join(', ')}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
