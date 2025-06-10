"use client";

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

interface ChatListItemProps {
  id: number;
  avatar: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isActive?: boolean;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  id,
  avatar,
  name,
  lastMessage,
  timestamp,
  unreadCount = 0,
  isActive = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/profile/chat/${id}`);
  };

  return (
    <ItemWrapper onClick={handleClick} isActive={isActive}>
      <Avatar src={avatar} alt={name} />
      <Content>
        <Header>
          <Name>{name}</Name>
          <Time>{timestamp}</Time>
        </Header>
        <LastMessage>{lastMessage}</LastMessage>
      </Content>
      {unreadCount > 0 && <UnreadBadge>{unreadCount}</UnreadBadge>}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  cursor: pointer;
  background: ${props => props.isActive ? '#f0eeff' : 'transparent'};
  border-left: 4px solid ${props => props.isActive ? '#6C5CE7' : 'transparent'};

  &:hover {
    background: ${props => props.isActive ? '#f0eeff' : '#f8f9fa'};
  }
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const Name = styled.div`
  font-weight: 500;
  color: #333;
`;

const Time = styled.div`
  font-size: 12px;
  color: #999;
`;

const LastMessage = styled.div`
  font-size: 13px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UnreadBadge = styled.div`
  background: #6C5CE7;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
`;

export default ChatListItem; 