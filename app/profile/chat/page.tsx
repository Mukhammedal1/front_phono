"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { useParams, useRouter } from "next/navigation"
import { useWebSocket } from "../../../contexts/WebSocketContext"
import MessageSendIcon from "../../../icons/MessageSend-icon"
import DeleteChatIcon from "../../../icons/DeleteChat-icon"
import DoubleTickIcon from "../../../icons/DoubleTick-icon"
import TickIcon from "../../../icons/Tick-icon"

interface IMessage {
  id: number
  content: string
  timestamp: string
  isOwn: boolean
  isRead: boolean
}

interface IChat {
  id: number
  avatar: string
  name: string
  lastMessage: string
  timestamp: string
  unreadCount: number
}

// Static data for testing
const STATIC_CHATS: IChat[] = [
  {
    id: 1,
    avatar: "https://img.freepik.com/premium-photo/portrait-beautiful-woman-against-white-background_1048944-19181871.jpg?semt=ais_items_boosted&w=740",
    name: "Rochel Foose",
    lastMessage: "Вы можете писать что угодно",
    timestamp: "10:03 AM",
    unreadCount: 2,
  },
  {
    id: 2,
    avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_items_boosted&w=740",
    name: "John Smith",
    lastMessage: "Хорошо, спасибо за ответ",
    timestamp: "Вчера",
    unreadCount: 0,
  },
  {
    id: 3,
    avatar: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_items_boosted&w=740",
    name: "Maria Garcia",
    lastMessage: "Привет! Как дела?",
    timestamp: "31 июля",
    unreadCount: 1,
  },
  {
    id: 4,
    avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_items_boosted&w=740",
    name: "Alex Johnson",
    lastMessage: "Увидимся завтра",
    timestamp: "30 июля",
    unreadCount: 0,
  },
  {
    id: 5,
    avatar: "https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?ga=GA1.1.1453060072.1749471166&semt=ais_hybrid&w=740",
    name: "Sarah Wilson",
    lastMessage: "Отлично! Договорились",
    timestamp: "29 июля",
    unreadCount: 3,
  },
]

const STATIC_MESSAGES: { [chatId: number]: IMessage[] } = {
  1: [
    {
      id: 1,
      content: "Привет! Как дела?",
      timestamp: "09:30 AM",
      isOwn: false,
      isRead: true,
    },
    {
      id: 2,
      content: "Привет! Все отлично, спасибо! А у тебя как?",
      timestamp: "09:32 AM",
      isOwn: true,
      isRead: true,
    },
    {
      id: 3,
      content: "Тоже все хорошо! Хотел обсудить проект",
      timestamp: "09:35 AM",
      isOwn: false,
      isRead: true,
    },
    {
      id: 4,
      content: "Конечно! Я готов обсудить детали",
      timestamp: "09:37 AM",
      isOwn: true,
      isRead: true,
    },
    {
      id: 5,
      content: "Вы можете писать что угодно",
      timestamp: "10:03 AM",
      isOwn: false,
      isRead: false,
    },
  ],
  2: [
    {
      id: 6,
      content: "Добрый день!",
      timestamp: "Вчера 14:20",
      isOwn: false,
      isRead: true,
    },
    {
      id: 7,
      content: "Добрый день! Как дела?",
      timestamp: "Вчера 14:25",
      isOwn: true,
      isRead: true,
    },
    {
      id: 8,
      content: "Хорошо, спасибо за ответ",
      timestamp: "Вчера 14:30",
      isOwn: false,
      isRead: true,
    },
  ],
  3: [
    {
      id: 9,
      content: "Привет! Как дела?",
      timestamp: "31 июля 16:45",
      isOwn: false,
      isRead: false,
    },
  ],
  4: [
    {
      id: 10,
      content: "Встретимся завтра в 15:00?",
      timestamp: "30 июля 18:20",
      isOwn: false,
      isRead: true,
    },
    {
      id: 11,
      content: "Да, конечно! Где встречаемся?",
      timestamp: "30 июля 18:25",
      isOwn: true,
      isRead: true,
    },
    {
      id: 12,
      content: "В кафе на центральной площади",
      timestamp: "30 июля 18:30",
      isOwn: false,
      isRead: true,
    },
    {
      id: 13,
      content: "Увидимся завтра",
      timestamp: "30 июля 18:35",
      isOwn: false,
      isRead: true,
    },
  ],
  5: [
    {
      id: 14,
      content: "Можем обсудить детали проекта?",
      timestamp: "29 июля 12:15",
      isOwn: true,
      isRead: true,
    },
    {
      id: 15,
      content: "Конечно! Когда удобно?",
      timestamp: "29 июля 12:20",
      isOwn: false,
      isRead: true,
    },
    {
      id: 16,
      content: "Завтра утром подойдет?",
      timestamp: "29 июля 12:25",
      isOwn: true,
      isRead: true,
    },
    {
      id: 17,
      content: "Отлично! Договорились",
      timestamp: "29 июля 12:30",
      isOwn: false,
      isRead: false,
    },
  ],
}

const ChatPage = () => {
  const params = useParams()
  const router = useRouter()
  const { socket, isConnected } = useWebSocket()

  // State declarations
  const [messages, setMessages] = useState<IMessage[]>([])
  const [chats, setChats] = useState<IChat[]>(STATIC_CHATS) // Initialize with static data
  const [inputValue, setInputValue] = useState("")
  const [selectedChat, setSelectedChat] = useState<number | null>(1) // Default to first chat
  const [isTyping, setIsTyping] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Load messages for selected chat
  useEffect(() => {
    if (selectedChat && STATIC_MESSAGES[selectedChat]) {
      setMessages(STATIC_MESSAGES[selectedChat])
    } else {
      setMessages([])
    }
  }, [selectedChat])

  // Socket event listeners (keep for when real socket is available)
  useEffect(() => {
    if (socket) {
      if (params?.id) {
        socket.emit("joinChat", Number(params.id))
        setSelectedChat(Number(params.id))
      }

      socket.on(`newMessage:${params?.id}`, (message: IMessage) => {
        setMessages((prev) => [...prev, message])
      })

      socket.on(`typing:${params?.id}`, ({ userId }) => {
        setIsTyping(true)
      })

      socket.on(`stopTyping:${params?.id}`, ({ userId }) => {
        setIsTyping(false)
      })

      socket.on(`messagesRead:${params?.id}`, ({ userId }) => {
        setMessages((prev) => prev.map((msg) => (msg.isOwn ? { ...msg, isRead: true } : msg)))
      })

      return () => {
        socket.off(`newMessage:${params?.id}`)
        socket.off(`typing:${params?.id}`)
        socket.off(`stopTyping:${params?.id}`)
        socket.off(`messagesRead:${params?.id}`)
        if (params?.id) {
          socket.emit("leaveChat", Number(params.id))
        }
      }
    }
  }, [socket, params?.id])

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)

    // Simulate typing indicator for demo
    setIsTyping(true)
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 1000)

    if (socket && params?.id) {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      socket.emit("typing", { chatId: params.id, userId: 1 })
      typingTimeoutRef.current = setTimeout(() => {
        socket.emit("stopTyping", { chatId: params.id, userId: 1 })
      }, 2000)
    }
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add message to static data for demo
      const newMessage: IMessage = {
        id: Date.now(),
        content: inputValue,
        timestamp: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
        isRead: false,
      }

      setMessages((prev) => [...prev, newMessage])
      setInputValue("")

      // Update last message in chat list
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === selectedChat
            ? {
              ...chat,
              lastMessage: inputValue,
              timestamp: "Сейчас",
            }
            : chat,
        ),
      )

      // Simulate auto-reply after 2 seconds
      setTimeout(() => {
        const autoReply: IMessage = {
          id: Date.now() + 1,
          content: "Спасибо за сообщение! Я получил его.",
          timestamp: new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isOwn: false,
          isRead: true,
        }
        setMessages((prev) => [...prev, autoReply])

        // Update chat list with auto-reply
        setChats((prev) =>
          prev.map((chat) =>
            chat.id === selectedChat
              ? {
                ...chat,
                lastMessage: autoReply.content,
                timestamp: "Сейчас",
                unreadCount: chat.unreadCount + 1,
              }
              : chat,
          ),
        )
      }, 2000)

      if (socket && params?.id) {
        const messageData = {
          chatId: Number(params.id),
          content: inputValue,
          senderId: 1,
        }
        socket.emit("sendMessage", messageData)
      }

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId)
    // Mark messages as read when selecting chat
    setChats((prev) => prev.map((chat) => (chat.id === chatId ? { ...chat, unreadCount: 0 } : chat)))
    // router.push(`/profile/chat/${chatId}`) // Uncomment when routing is needed
  }

  const handleDeleteChat = () => {
    setIsDropdownOpen(false)
    setIsDeleteModalOpen(true)
  }

  const confirmDeleteChat = () => {
    if (selectedChat) {
      // Remove chat from static data
      setChats((prev) => prev.filter((chat) => chat.id !== selectedChat))
      setSelectedChat(chats.length > 1 ? chats[0].id : null)
    }

    if (socket && params?.id) {
      socket.emit("deleteChat", Number(params.id), () => {
        router.push("/profile/chat")
      })
    }
    setIsDeleteModalOpen(false)
  }

  const cancelDeleteChat = () => {
    setIsDeleteModalOpen(false)
  }

  // Get current chat info
  const currentChat = chats.find((chat) => chat.id === selectedChat)

  return (
    <>
      <ChatPageWrapper>
        <SidebarWrapper>
          <ChatHeader>
            <h1>Чаты</h1>
          </ChatHeader>
          <ChatList hasChats={chats.length > 0}>
            {chats.length > 0 ? (
              chats.map((chat) => (
                <ChatListItemWrapper
                  key={chat.id}
                  isActive={chat.id === selectedChat}
                  onClick={() => handleChatSelect(chat.id)}
                >
                  <ChatAvatar src={chat.avatar} alt={chat.name} />
                  <ChatInfo>
                    <ChatName>{chat.name}</ChatName>
                    <ChatLastMessage>{chat.lastMessage}</ChatLastMessage>
                  </ChatInfo>
                  <TimeLastMessageBadge>
                    <ChatTime>{chat.timestamp}</ChatTime>
                    {chat.unreadCount > 0 && <UnreadBadge>{chat.unreadCount}</UnreadBadge>}
                  </TimeLastMessageBadge>
                </ChatListItemWrapper>
              ))
            ) : (
              <EmptyState>У вас еще нет чатов</EmptyState>
            )}
          </ChatList>
        </SidebarWrapper>

        <ChatWindow>
          {selectedChat && currentChat ? (
            <>
              <ChatWindowHeader>
                <UserInfo>
                  <UserAvatar src={currentChat.avatar} alt="User" />
                  <div>
                    <UserName>{currentChat.name}</UserName>
                    <UserStatus>{isTyping ? "Печатает..." : "Был(-а) в сети недавно"}</UserStatus>
                  </div>
                </UserInfo>
                <HeaderActions ref={dropdownRef}>
                  <MoreButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>⋮</MoreButton>
                  <DropdownMenu isOpen={isDropdownOpen}>
                    <DropdownItem onClick={handleDeleteChat}><DeleteChatIcon /> Удалить чат</DropdownItem>
                  </DropdownMenu>
                </HeaderActions>
              </ChatWindowHeader>

              <MessagesContainer>
                {messages.map((message) => (
                  <MessageWrapper key={message.id} isOwn={message.isOwn}>
                    <MessageBubble isOwn={message.isOwn}>
                      {message.content}
                      {message.isOwn && (
                        <MessageStatus>
                          <MessageTime>{message.timestamp}</MessageTime>
                          <ReadStatus>{message.isRead ? <DoubleTickIcon/> : <TickIcon/>}</ReadStatus>
                        </MessageStatus>
                      )}
                      {!message.isOwn && <br />} {!message.isOwn && <MessageTime style={{ textAlign: "left" }}>{message.timestamp}</MessageTime>}
                    </MessageBubble>
                  </MessageWrapper>
                ))}
                <div ref={messagesEndRef} />
              </MessagesContainer>

              <MessageInputContainer>
                <MessageInput
                  placeholder="Напишите что нибудь ..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <SendButton onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <MessageSendIcon color="#4E46B4" />
                </SendButton>
              </MessageInputContainer>  
            </>
          ) : (
            <EmptyState>Выберите, кому хотели бы написать</EmptyState>
          )}
        </ChatWindow>
      </ChatPageWrapper>

      {/* Delete Confirmation Modal */}
      <ModalOverlay isOpen={isDeleteModalOpen} onClick={cancelDeleteChat}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalTitle>Удалить чат?</ModalTitle>
          <ModalText>Вы действительно хотите удалить этот чат?</ModalText>
          <ModalActions>
            <ModalButton variant="danger" onClick={confirmDeleteChat}>
              Удалить
            </ModalButton>
            <ModalButton onClick={cancelDeleteChat}>Отмена</ModalButton>
          </ModalActions>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}

// Styled Components (same as before, with some additions)
const ChatPageWrapper = styled.div`
margin: 0 auto;
  display: flex;
  width: 1194px;
  height: 90vh;
  border: 2px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`

const TimeLastMessageBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`

const SidebarWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  /* border-right: 1px solid #eee; */
  background: white;
`

const ChatHeader = styled.div`
  background-color: #4e46b4;
  padding: 16px 20px;
  h1 {
    font-size: 24px;
    font-family: SF Pro Display, sans-serif;
    font-weight: 600;
    color: white;
    margin: 0;
  }
`

const ChatList = styled.div<{ hasChats: boolean }>`
  flex: 1;
  background: white;
  border: 1px solid #eee;
  ${(props) => (props.hasChats ? "overflow-y: auto;" : "overflow: hidden;")}
  display: flex;
  flex-direction: column;
`

const ChatListItemWrapper = styled.div<{ isActive?: boolean }>`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${(props) => (props.isActive ? "#00000014" : "white")};
  position: relative;
`

const ChatAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const ChatName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`

const ChatLastMessage = styled.div`
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ChatTime = styled.div`
  font-size: 12px;
  color: #999;
  white-space: nowrap;
`

const UnreadBadge = styled.div`
  background: #9c9a9a;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`

const ChatWindow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ChatWindowHeader = styled.div`
  padding: 9.5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4e46b4;
  color: white;
  position: relative;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const UserName = styled.div`
  font-weight: 500;
`

const UserStatus = styled.div`
  font-size: 12px;
  opacity: 0.8;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`

const MoreButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 150px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: #FF4E64;
  font-size: 14px;
`

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #F5F5F5;
`

const MessageWrapper = styled.div<{ isOwn: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isOwn ? "flex-end" : "flex-start")};
  margin-bottom: 15px;
`

const MessageBubble = styled.div<{ isOwn: boolean }>`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 18px;
  background: ${(props) => (props.isOwn ? "#4E46B4" : "#FFFFFF")};
  color: ${(props) => (props.isOwn ? "white" : "#000000")};
  font-size: 16px;
  font-weight: 400;
  font-family: "SF Pro Display";
  /* text-align: center; */
  position: relative;
`

const MessageStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
`

const MessageTime = styled.span`
  font-size: 11px;
  opacity: 0.8;
`

const ReadStatus = styled.span`
  font-size: 12px;
  opacity: 0.9;
`

const MessageInputContainer = styled.div`
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  background: white;
`

const MessageInput = styled.input`
  height: 56px;
  flex: 1;
  padding: 0 0 0 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #6c5ce7;
  }
`

const SendButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:disabled {
    display: none;
    cursor: not-allowed;
  }
`

const EmptyState = styled.div`
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`

// Modal Components
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`

const ModalTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`

const ModalText = styled.p`
  margin: 0 0 24px 0;
  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`

const ModalButton = styled.button<{ variant?: "danger" | "default" }>`
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  min-width: 80px;

  ${(props) =>
    props.variant === "danger"
      ? `
    background: white;
    color: #FF4E64;
    &:hover {
      background: #f0c3c3ca;
    }
  `
      : `
    background: #6C5CE7;
    color: white;
    &:hover {
      background: #5a4bd1;
    }
  `}
`

export default ChatPage
