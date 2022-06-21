// Footer
// 화면 창 줄어들었을때 css 수정
import React from "react";
import styled from "styled-components";
import socialImg from "../static/footer-social.png";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterTop>
        <FooterLeft>
          <h2>고객행복센터</h2>
          <Contact>
            <ContactLeft>
              <h1>1644-1107</h1>
            </ContactLeft>
            <ContactRight>
              365고객센터
              <br />
              <Opacity>오전7시 - 오후 7시</Opacity>
            </ContactRight>
          </Contact>

          <Contact>
            <ContactLeft>카카오톡 문의</ContactLeft>
            <ContactRight>
              365고객센터
              <br />
              <Opacity>오전7시 - 오후 7시</Opacity>
            </ContactRight>
          </Contact>

          <Contact>
            <ContactLeft>1:1 문의</ContactLeft>
            <ContactRight>
              24시간 접수 가능
              <br />
              <Opacity>
                고객센터 운영시간에 순차적으로 답변해드리겠습니다.
              </Opacity>
            </ContactRight>
          </Contact>

          <Contact>
            <ContactLeft>대량주문 문의</ContactLeft>
            <ContactRight>
              <Opacity>비회원의 경우 메일로 문의 바랍니다.</Opacity>
            </ContactRight>
          </Contact>
        </FooterLeft>

        <FooterRight>
          <Menu>
            컬리소개 컬리소개영상 인재채용 이용약관 <b>개인정보처리방침</b>{" "}
            이용안내
          </Menu>

          <Detail>
            법인명 (상호): 주식회사 컬리 | 사업자등록번호: 261-81-23567{" "}
            <Purple>사업자정보 확인</Purple>
            <br />
            통신판매업: 제 2018-서울강남-01646호 | 개인정보보호책임자 : 이원준
            <br />
            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 :
            김슬아
            <br />
            입점문의 : <Purple>입점문의하기</Purple> | 마케팅제휴 :{" "}
            <Purple>business@kurlycorp.com</Purple>
            <br />
            채용문의 : <Purple>recruit@kurlycorp.com</Purple>
            <br />
            팩스 : 070 - 7500 - 6098 | 이메일 :{" "}
            <Purple>help@kurlycorp.com</Purple>
            <br />
            대량주문 문의 : <Purple>kurlygift@kurlycorp.com</Purple>
            <br />
          </Detail>

          <Social>
            <img src={socialImg} alt="footer-social" width="200px" />
          </Social>
        </FooterRight>
      </FooterTop>

      <FooterBottom>
        마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
        판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다. <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
        당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와
        책임을 부담하지 않습니다. <br />
        <CopyRight>KURLY CORP.ALL RIGHTS RESERVED</CopyRight>
      </FooterBottom>
    </FooterWrap>
  );
};

const Opacity = styled.div`
  opacity: 0.5;
`;

const FooterWrap = styled.div`
  margin-top: 80px;
  border-top: 1px solid rgb(0, 0, 0, 0.05);
  border-opacity: 0.5;
`;

const FooterTop = styled.div`
  display: flex;
  margin: 4px auto 20px auto;
  text-align: left;
  justify-content: center;
`;

const FooterLeft = styled.div`
  margin: 0 60px 0 20px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  word-spacing: -0.1em;
`;

const ContactLeft = styled.div`
  font-size: 16px;
  width: 180px;
`;

const ContactRight = styled.div`
  font-size: 14px;
`;

const FooterRight = styled.div`
  padding-right: 80px;
`;

const Menu = styled.div`
  font-size: 14px;
  margin: 28px 0;
  word-spacing: 0.6em;
  &:hover {
    cursor: pointer;
  }
`;

const Detail = styled.div`
  font-size: 12px;
  color: var(--graysub1);
  margin-bottom: 28px;
`;

const Purple = styled.a`
  color: var(--maincolor);
  &:hover {
    cursor: pointer;
  }
`;

const Social = styled.div`
  margin-top: 28px;
  &:hover {
    cursor: pointer;
  }
`;

const FooterBottom = styled.div`
  background-color: var(--graysub3);
  opacity: 0.4;
  padding: 20px 0 28px 0;
  font-size: 8px;
  word-spacing: -0.1em;
`;

const CopyRight = styled.div`
  padding: 8px;
`;

export default Footer;
