import styled from 'styled-components';

const ProductsStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 100%;

  align-items: center;
  justify-content: space-between;

  gap: 50px;
  margin: 0 auto;
  padding: 20px 0;

  .product-wrapper {
    position: relative;

    display: flex;
    flex-direction: column;

    transition: transform 0.15s ease;

    :hover {
      transform: scale(1.05);
    }

    .add-to-favorites {
      position: absolute;

      top: 10px;
      right: 10px;

      border: none;
      outline: none;

      cursor: pointer;

      background-color: transparent;

      img {
        pointer-events: none;
      }
    }

    .product {
      display: flex;
      flex-direction: column;

      width: 100%;
      aspect-ratio: 1;

      align-items: center;
      justify-content: center;

      gap: 4px;

      cursor: pointer;
      background-color: white;

      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      .product-info {
        text-align: center;
      }
    }

    .add-to-cart {
      display: grid;
      place-items: center;

      width: 100%;

      padding: 8px 0;

      border: none;
      outline: none;

      cursor: pointer;

      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      color: white;
      background-color: #393d45;
    }
  }
`;

export default ProductsStyles;
