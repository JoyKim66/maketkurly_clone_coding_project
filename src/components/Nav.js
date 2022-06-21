// Footer
// 검색어 css 수정중
// 윈도우창 줄어들었을때 글씨 움직이지 않게 수정하기
// 스크롤시 고정하기
// 전체보기 메뉴 만들기
import React from "react";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Nav = () => {
  return (
    <NavWrap>
      <MenuWrap>
        <MenuAll>
          <MenuRoundedIcon sx={{ fontSize: 32 }} />
          전체 카테고리
        </MenuAll>

          <MenuCategory>
            <CategoryList>신상품</CategoryList>
            <CategoryList>베스트</CategoryList>
            <CategoryList>알뜰쇼핑</CategoryList>
            <CategoryList>특가/혜택</CategoryList>
          </MenuCategory>

      </MenuWrap>

      <Search>
        <SearchInput type="text" placeholder="검색어를 입력해주세요." />
        <SearchRoundedIcon sx={{ mr: 1 }} />
      </Search>

      <Icon>
        <FmdGoodOutlinedIcon sx={{ fontSize: 32 }} />
        <FavoriteBorderRoundedIcon sx={{ fontSize: 32 }} />
        <ShoppingCartOutlinedIcon sx={{ fontSize: 32 }} />
      </Icon>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  display: flex;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 -2px 3px -1px rgba(0, 0, 0, 0.05);
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const MenuAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  &:hover {
    color: var(--maincolor);
    cursor: pointer;
  }
`;

const MenuCategory = styled.ul`
  display: flex;
  list-style-type: none;
`;

const CategoryList = styled.li`
  margin: 0 44px 0 20px;
  text-align: center;
  &:hover {
    color: var(--maincolor);
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
    // text-border-bottom: 0.5px solid var(--maincolor);
  }
`;

const Search = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: rgb(0, 0, 0, 0.03);
  background-color: rgb(0, 0, 0, 0.03);
  &:onclick {
    outline: 1.5px solid rgb(0, 0, 0, 0.03);
    background-color: white;
  }
  margin-right: 28px;
`;

const SearchInput = styled.input`
  width: 240px;
  height: 32px;
  border-radius: 20px;
  padding-left: 16px;
  border: rgb(0, 0, 0, 0.03);
  background-color: rgb(0, 0, 0, 0);
  font-size: 12px;
  &:focus {
    outline: 1.5px solid rgb(0, 0, 0, 0.03);
    background-color: white;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
  width: 150px;
`;

export default Nav;
