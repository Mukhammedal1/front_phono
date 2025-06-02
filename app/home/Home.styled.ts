import styled from "styled-components";


export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  .search-input {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;

    .searchIcon {
      position: absolute;
      left: 16px;
      width: 24px;
      height: 24px;
      color: #999ca0;
    }

    & > input {
      width: 1035px;
      height: 48px;
      border: none;
      border-radius: 8px;
      background-color: #f5f5f5;
      padding-left: 48px;
    }

    .settings-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 8px;
      font-size: 24px;
      width: 48px;
      height: 48px;
      background-color: #f5f5f5;
    }
  }

  & > h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin-top: 40px;
  }

  .cards-group {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, auto);
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 30px;
    width: 90%;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-container p {
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #333;
  }

  .product-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;

    .product-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 276px;
      height: 354px;
      background-color: #f5f5f5;
      border-radius: 12px;
    }
  }
`;