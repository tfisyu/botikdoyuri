'use client'
import React, { useState, useRef } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import submitData from '../actions';

const AddParticipant = () => {
  const [num, setNum] = useState('');
  const [name, setName] = useState('');
  const [form] = Form.useForm();

  const buttonRef: { current: null | HTMLButtonElement } = useRef(null);

  const handleClick = () => {
    if (buttonRef.current && !buttonRef.current.disabled) {
      buttonRef.current.disabled = false;
      setNum(generateNum(1, 200).toString());
    };
  }

  const generateNum = (min: number, max: number) => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };

  const onFinish = (num: Array<string>) => {
    const convertingNum = Object.values(num)
    const extractingNum = convertingNum[0]
    submitData(name, extractingNum)
  };

  return (
    <Form
      onFinish={onFinish}
      onSubmitCapture={() => onFinish}
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <>
        <Form.Item label="nome">
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item label="números">
          <Form.List name='participant-number'>
            {(subFields, subOpt) => (
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                {subFields.map((subField) => (
                  <Space key={subField.key}>
                    <Form.Item noStyle  {...subField}>
                      <Input placeholder="número" />
                    </Form.Item>
                    <CloseOutlined
                      onClick={() => {
                        subOpt.remove(subField.name);
                      }}
                    />
                  </Space>
                ))}
                <Button type="dashed" onClick={() => subOpt.add()} block>
                  adicionar número
                </Button>
              </div>
            )}
          </Form.List>
        </Form.Item>
      </>
      <Input placeholder='número gerado' value={num} />
      <Button type='dashed' ref={buttonRef} onClick={handleClick}>gerar</Button>
      <Button type='primary' htmlType='submit'>adicionar participante</Button>
    </Form>
  );
};

export default AddParticipant;