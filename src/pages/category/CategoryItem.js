import "../.././App.css";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ card }) => {
  const navigate = useNavigate();

  return (
    <CategoryItemWrap onClick={() => navigate("/products/"+card.id)}>
      <img src={card.imageUrl.toString()} alt="카테고리 상품" />
      <Name>{card.name}</Name>
      <Price>
        {card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </Price>
    </CategoryItemWrap>
  );
};

const CategoryItemWrap = styled.div`
//   background-color: yellow;
  width: 32%;
  height: 360px;
  margin: 20px 0 200px 0;
  margin-right: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.div`
  margin: -24px 0 8px 0;
  text-align: left;
//   background-color: blue;
  font-size: 20px;
`;

const Price = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`;

export default CategoryItem;
