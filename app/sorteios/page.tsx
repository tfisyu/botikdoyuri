import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import Navbar from '../components/Navbar';

interface DataType {
  key: string;
  title: string;
  date: string
  winner: string;
  value: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
  },
  
  {
    title: 'Ganhador(a/e)',
    dataIndex: 'winner',
    key: 'winner',
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
  },
];

const data: DataType[] = [
  {
    key: '1',
    title: 'sorteio do ciclo 10',
    date: '14/08/2024',
    winner: 'Ofélia',
    value: 'R$250'
  },
];

export default function Giveaway () {
  return (
    <div>
      <Navbar/>
      <Table 
        <DataType> columns={columns} dataSource={data}
        size='small'
        style={{margin: '0 5rem', padding: '1rem'}}
      />
    </div>
  );
}