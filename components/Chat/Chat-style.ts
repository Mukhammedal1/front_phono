import styled from "styled-components"

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background: white;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100vw;
  }
`

export const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  background: #f8f9fa;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
    color: #333;
  }
`

export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const OwnerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`

export const OwnerDetails = styled.div`
  flex: 1;
`

export const OwnerName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
`

export const OwnerRole = styled.p`
  margin: 2px 0 0 0;
  font-size: 0.9rem;
  color: #666;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
`

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 12px;
  object-fit: cover;
`

export const ProductDetails = styled.div`
  flex: 1;
`

export const ProductName = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`

export const ProductPrice = styled.p`
  margin: 4px 0 0 0;
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 700;
`

export const ChatArea = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const MessagesContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;
`

export const Message = styled.div<{ isUser: boolean }>`
  margin-bottom: 15px;
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`

export const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  background: ${(props) => (props.isUser ? "#667eea" : "#f1f3f4")};
  color: ${(props) => (props.isUser ? "white" : "#333")};
  font-size: 0.95rem;
  line-height: 1.4;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #e5e5e5;
  background: white;
`

export const MessageInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  font-size: 0.95rem;

  &:focus {
    border-color: #667eea;
  }
`

export const SendButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: #5a6fd8;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

export const WelcomeMessage = styled.div`
  text-align: center;
  color: #666;
  font-style: italic;
  margin-bottom: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
`