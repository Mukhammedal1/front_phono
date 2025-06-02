import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f4f6;
    padding: 10rem;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 534px;
    max-width: 443px;
    padding: 2rem;
    gap: 1.5rem;
    border-radius: 1.5rem;
    background-color: white;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;

    &>h3 {
        font-weight: 600;
        font-size: 24px;
    }

    &>p {
        color: #999CA0;
        font-weight: 400;
        font-size: 16px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;

        & > input {
            width: 100%;
            height: 48px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 12px;

            &.error {
              border-color: red;
            }
        }

        & > p {
            font-size: 12px;
            font-weight: 400;
            color: #999CA0;
            margin-left: 12px;

            & > a {
                text-decoration-line: none;
            }
        }
    }

    .otp-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 8px;

        input {
          width: 48px;
          height: 56px;
          text-align: center;
          font-size: 24px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;

          &:focus {
            outline: none;
            border-color: black;
          }
        }
    }

    .timer {
      font-size: 14px;
      color: #999CA0;
      text-align: center;
      margin-top: 8px;
    }

    .confirm-button {
      width: 100%;
      height: 48px;
      margin-top: 16px;
      border-radius: 8px;
      background-color: #000;
      color: #fff;
      border: none;
      cursor: pointer;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }
  
  span {
    margin: 0 16px;
    color: #666;
    font-size: 14px;
  }
`

export const GoogleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    gap: 12px;
    padding: 12px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e8e8e8;
    }
`
