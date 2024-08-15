import prisma from '@/lib/prisma'
import React from 'react'
import { Card, Col, Row } from 'antd';
import TheWinner from './components/theWinner';

export default async function ShowParticipant() {
  const participants = await prisma.participant.findMany()
  return (
    <div>
      <Row gutter={24}>
        {participants.map((participant) => (
          <Col span={8} key={participant.id}>
            <Card title={participant.name} bordered={true} size='small'>
              {participant.number.join(', ')}
            </Card>
          </Col>
        ))}
      </Row>
      <TheWinner />
    </div>
  )
}