"use client";

import React from 'react';
import styled from 'styled-components';
import DoubleTickIcon from '../../../../icons/DoubleTick-icon';

interface MessageProps {
  content: string;
  timestamp: string;
  isOwn: boolean;
  isRead?: boolean;
}

const Message: React.FC<MessageProps> = ({ content, timestamp, isOwn, isRead }) => {
  return (
    <MessageWrapper isOwn={isOwn}>
      <MessageBubble isOwn={isOwn}>
        <MessageText>{content}</MessageText>
        <MessageInfo>
          <MessageTime>{timestamp}</MessageTime>
          {isOwn && <ReadStatus isRead={isRead}><DoubleTickIcon/></ReadStatus>}
        </MessageInfo>
      </MessageBubble>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div<{ isOwn: boolean }>`
  display: flex;
  justify-content: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  margin: 8px 0;
  padding: 0 10px;
`;

const MessageBubble = styled.div<{ isOwn: boolean }>`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${props => props.isOwn ? '#6C5CE7' : '#f1f3f4'};
  color: ${props => props.isOwn ? 'white' : '#333'};
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;
`;

const MessageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

const MessageTime = styled.span`
  font-size: 11px;
  opacity: 0.7;
`;

const ReadStatus = styled.span<{ isRead?: boolean }>`
  font-size: 11px;
  opacity: ${props => props.isRead ? 1 : 0.5};
  color: ${props => props.isRead ? '#8ef5a0' : 'inherit'};
`;

export default Message; 