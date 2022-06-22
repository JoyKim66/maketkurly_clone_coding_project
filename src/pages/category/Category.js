import React from "react";
import styled from "styled-components";
import MenuNew from "../../static/menu-new.png";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../../redux/moduels/post";
import CategoryItem from "./CategoryItem";

const Category = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.post.post);
  console.log(products);

  //메인페이지 로드
  React.useEffect(() => {
    
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <CategoryWrap>
      <a
        href="https://www.kurly.com/shop/goods/goods_list.php?category=038"
        target="_blank"
      >
        <img src={MenuNew} alt="신상품 카테고리" />
      </a>

      <span>신상품</span>

      {/* post 목록 */}
      <Products>
        {products.map((card) => (
          <CategoryItem card={card} />
        ))}
      </Products>
    </CategoryWrap>
  );
};

const CategoryWrap = styled.div`
  // background-color: rgb(0, 0, 0, 0.05);
  width: 1050px;
  margin: 20px auto 80px auto;

  & img {
    width: 100%;
    height: 380px;
    margin-bottom: 40px;
  }

  & span {
    font-size: 28px;
    font-weight: bold;
  }
`;

const Products = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Category;
