import React, { useState } from 'react';
import { Avatar, Input, Button, List, message } from 'antd';

const Message = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'You', // You can change this to the actual sender's name or id
        timestamp: new Date().toLocaleTimeString(),
      };

      const newMessage2 = {
        id: messages.length + 2,
        text: inputValue,
        sender: 'abcd', // You can change this to the actual sender's name or id
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage, newMessage2]);
      setInputValue('');
    } else {
      message.error('Please enter a message.');
    }
  };

  return (
    <div className="message-container">
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item, index) => (
          <List.Item className={item.sender === 'You' ? 'message-right' : 'message-left'}>
            <List.Item.Meta
              avatar={<Avatar>{item.sender.charAt(0)}</Avatar>}
              title={item.sender} // Display sender's name
              description={<div className="message-content">{item.text}</div>}
            />
            <div className="message-timestamp">{item.timestamp}</div>
          </List.Item>
        )}
      />
      <div className="input-container">
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
          onPressEnter={sendMessage}
        />
        <Button type="primary" onClick={sendMessage}>Send</Button>
      </div>
      <style jsx>{`
        .message-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 10px;
        }

        .message-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .message-left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .ant-list-item-meta-title {
          font-weight: bold;
        }

        .ant-list-item-meta-description {
          max-width: 70%;
        }

        .message-timestamp {
          color: #999;
          font-size: 12px;
        }

        .input-container {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }

        .ant-input {
          flex: 1;
          margin-right: 10px;
        }

        .ant-btn {
          flex-shrink: 0;
        }

        .message-content {
          word-wrap: break-word; /* Ensure message content wraps to the next line */
        }

        @media (max-width: 768px) {
          .ant-list-item-meta-title {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Message;
