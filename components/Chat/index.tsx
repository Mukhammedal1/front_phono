import { useEffect, useRef, useState } from "react"
import { ChatArea, CloseButton, Header, InputContainer, Message, MessageBubble, MessageInput, MessagesContainer, ModalContainer, Overlay, OwnerDetails, OwnerImage, OwnerInfo, OwnerName, OwnerRole, ProductDetails, ProductImage, ProductInfo, ProductName, ProductPrice, SendButton, WelcomeMessage } from "./Chat-style"
// import { CloseButton } from "react-toastify"

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
  productOwner: {
    name: string
    profileImage: string
    role: string
  }
  product: {
    name: string
    image: string
    price: string
  }
}

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatModal({ isOpen, onClose, productOwner, product }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: `Hi! I'm jdiewij, the product owner for ${product.name}. How can I help you today?`,
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, productOwner?.name, product?.name, messages.length])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, newMessage])
      setInputValue("")

      // Simulate response after a delay
      setTimeout(() => {
        const responses = [
          "Thanks for your question! Let me help you with that.",
          "That's a great question about our product!",
          "I'd be happy to provide more details about that feature.",
          "Let me check that information for you.",
          "That's one of our most popular features!",
        ]

        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: randomResponse,
            isUser: false,
            timestamp: new Date(),
          },
        ])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <Header>
          <CloseButton onClick={onClose}>×</CloseButton>
          <OwnerInfo>
            <OwnerImage src={productOwner?.profileImage} alt={productOwner?.name} />
            <OwnerDetails>
              <OwnerName>{productOwner?.name}</OwnerName>
              <OwnerRole>{productOwner?.role}</OwnerRole>
            </OwnerDetails>
          </OwnerInfo>

          <ProductInfo>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductDetails>
          </ProductInfo>
        </Header>

        <ChatArea>
          <MessagesContainer>
            {messages.length === 0 && (
              <WelcomeMessage>
                Start a conversation with {productOwner?.name} about {product.name}
              </WelcomeMessage>
            )}

            {messages.map((message) => (
              <Message key={message.id} isUser={message.isUser}>
                <MessageBubble isUser={message.isUser}>{message.text}</MessageBubble>
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </MessagesContainer>
        </ChatArea>

        <InputContainer>
          <MessageInput
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SendButton onClick={handleSendMessage} disabled={!inputValue.trim()}>
            Send
          </SendButton>
        </InputContainer>
      </ModalContainer>
    </>
  )
}
