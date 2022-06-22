// 상세페이지 메인
// ProductOrder css
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../../redux/moduels/post";

const Sum = (price, num) => {
  return price * num;
};

const AddCart = () => {
  window.alert("장바구니 담기 완료!");
};

const ProductMain = ({ productId }) => {
  console.log(productId);
  const dispatch = useDispatch();
  const data2 = useSelector((state) => state.post.detail_post[productId]);
  console.log(data2);

  const [item, setItem] = useState({
    productId: 1,
    productName: "[폴 바셋] 바리스타 돌체라떼 300ml",
    subTitle: "간편하게 맛보는 달콤한 풍미",
    salesUnit: "1개",
    weight: "330ml",
    shippingCategory: "샛별배송/택배배송",
    origin: "프랑스",
    packagingType: "냉장/스티로폼",
    alergy: "- 우유 함유",
    info: "- 패키지가 변경되어 변경된 패키지로 배송됩니다. 내용물은 동일하오니 참고 부탁드립니다.",
    thumbnailUrl:
      "https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211107237211.jpg",
    productPrice: 20000,
  });
  console.log(item);
  const data = item;

  //상세페이지 로드 로드
  React.useEffect(() => {
    dispatch(postActions.detailPostDB(productId));
  }, []);

  React.useEffect(() => {
    setItem(data2);
    console.log(item);
  }, [data2]);

  //수량체크 및 가격반영
  const [num, setNum] = useState(1);
  const upCount = () => {
    setNum(num + 1);
  };
  const downCount = () => {
    setNum(num > 0 ? num - 1 : 0);
  };
  const value = (e) => setNum(Number(e.target.value));

  return (
    <ProductMainWrap>
      <ProductImage
        src={item.thumbnailUrl}
        alt={item.productName}
      ></ProductImage>
      <ProductAbout>
        <ProductName>
          <NameTitle>{item.productName}</NameTitle>
          <NameDetail>{item.subTitle}</NameDetail>
        </ProductName>
        <ProductPrice>
          {data.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              marginLeft: "2px",
            }}
          >
            원
          </span>
        </ProductPrice>
        <ProductTable>
          <tbody>
            <tr>
              <td style={{ width: "22%", paddingTop: "16px" }}>판매단위</td>
              <td style={{ paddingTop: "16px" }}>{item.salesUnit}</td>
            </tr>
            <tr>
              <Td>중량/용량</Td>
              <Td>{item.weight}</Td>
            </tr>
            <tr>
              <Td>배송구분</Td>
              <Td>{item.shippingCategory}</Td>
            </tr>
            <tr>
              <Td>포장타입</Td>
              <Td>{item.packagingType}</Td>
            </tr>
            <tr>
              <Td>알레르기정보</Td>
              <Td>{item.alergy}</Td>
            </tr>
            <tr>
              <Td>안내사항</Td>
              <Td>{item.info}</Td>
            </tr>
            <tr>
              <Td>구매수량</Td>
              <Td>
                <BoxCount>
                  <button
                    className="down btn"
                    onClick={downCount}
                    disabled={num < 2}
                  />
                  <input className="inp" onChange={value} value={num} />
                  <button className="up btn" onClick={upCount} />
                </BoxCount>
              </Td>
            </tr>
          </tbody>
        </ProductTable>

        <ProductOrder>
          <TotalPrice>
            총 상품금액 :{" "}
            <Price>
              {Sum(data.productPrice, num)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Price>
            <span style={{ fontSize: "20px" }}>원</span>
            <br />
            <Miles>적립</Miles>
            <span style={{ fontSize: "14px", fontWeight: "normal" }}>
              로그인 후, 적립혜택 제공
            </span>
          </TotalPrice>

          <AddCartBtn onClick={AddCart}>장바구니 담기</AddCartBtn>
        </ProductOrder>
      </ProductAbout>
    </ProductMainWrap>
  );
};

const ProductMainWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  background-color: black;
  width: 41%;
  height: 540px;
`;

const ProductAbout = styled.div`
    // background-color: rgb(0, 0, 0, 0.1);
  width: 53%;
  text-align: left;
  padding-left: 4px;
`;

const ProductName = styled.div`
  //   background-color: rgb(0, 0, 0, 0.2);
`;

const NameTitle = styled.h2`
  margin-top: 4px;
`;

const NameDetail = styled.div`
  margin-top: -16px;
  font-size: 14px;
  color: #666;
`;

const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 24px;
`;

const ProductTable = styled.table`
  margin: 16px 0;
  border-top: 1px solid rgb(0, 0, 0, 0.05);
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
`;

const Td = styled.td`
  border-bottom: 1px solid rgb(0, 0, 0, 0.05);
  padding: 16px 0;
`;

const ProductOrder = styled.div`
  align-items: column;
  float: right;
  justify-items: end;
`;

const BoxCount = styled.div`
  overflow: hidden;
  width: 88px;
  height: 30px;
  border: 1px solid var(--graysub3);
  border-radius: 3px;

  .down {
    background: url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg");
  }
  .up {
    background: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg");
  }
  .btn {
    float: left;
    width: 28px;
    height: 28px;
    border: 0;
  }
  .inp {
    float: left;
    width: 30px;
    height: 30px;
    padding: 0 0 4px;
    border: 0;
    font-size: 14px;
    text-align: center;
  }
`;

const TotalPrice = styled.div`
  margin-top: 16px;
  font-size: 13px;
  font-weight: bold;
`;

const Price = styled.span`
  font-size: 30px;
  padding: 0 4px 0 8px;
`;

const Miles = styled.div`
  display: inline-block;
  border-radius: 10px;
  background-color: #ffbb00;
  color: white;
  width: 36px;
  padding: 1px 2px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  margin: 8px 4px 8px 0;
`;

const AddCartBtn = styled.div`
  width: 400px;
  height: 40px;
  background-color: var(--maincolor);
  color: white;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  //   float: right;
  padding-top: 16px;
  margin-top: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export default ProductMain;
