# Maketkurly 클론코딩


![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdHp0Ac%2FbtrFAiUthgw%2Fw0PJYAURTQAFMkCWoRGfek%2Fimg.png)

- **[시연 영상](https://youtu.be/npLmr8KPAUE)<br>**

## 1. 제작기간 및 팀원소개

2022.06.17~.06.23

FE - 김환희, 서정은<br>
BE - 박성규,이호진,박종연

## 2. 프로젝트 구조 및 기능 소개
![프로젝트구조](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb00Eot%2FbtrFuD6jcEP%2F5HrHuf65Vtzt3S7GIFQDxK%2Fimg.png)

담당한 기능

- 회원가입 : 뷰 구현, 회원가입 유효성검사, 카카오 우편번호 API

- 로그인: 뷰, 로그인 유효성 검사, 로그아웃 (JWT 토큰으로 진행), 로그인/로그아웃 헤더 상태변환

- 메인페이지 : 상단및 카드 이미지 슬라이드

- 장바구니 : 개별 수량조절 및 가격조절, 개별 수량체크, 전체 수량체크, 장바구니 목록 불러오기,추가하기,삭제하기 

![회원가입](https://blog.kakaocdn.net/dn/ecUg82/btrFBg9FHcM/K9Oy2aeJLh04aegrlN0lAk/img.gif)

- 아이디는 6자리이상의 영문과 숫자 조합으로 진행해야하고 중복확인 api를 연결해서 중복된 아이디로 가입할수 없게 만들었습니다. 

- 비밀번호는 영문숫자특수문자를 포함해 10~25자리로 생성하도록 만들었고 비밀번호와 비밀번호 확인의 문자가 일치하지 않으면 가입할 수 없게 하였습니다.

- 이메일은 이메일 형식에 맞는 정규식으로 검사하였습니다.

- 주소 검색은 카카오 우편번호 API를 붙여서 주소를 가져오고 그 주소를 입력하면 주소 창이 사용자가 입력한 주소로 변하게 뷰를 구현하였습니다

- 가입하기 버튼을 누를땐 모든 유효성검사를 검사하고 중복확인검사해서 유효하지 않을시 가입을 할 수 없게 하였습니다.<br>

![메인1](https://blog.kakaocdn.net/dn/rNwTy/btrFBhALakK/qQUEZTJ1bmae0xEU36KaR1/img.gif)
![메인2](https://blog.kakaocdn.net/dn/8KBzA/btrFCh77KsS/F0iJAhsMkULpgSxxi9HBKK/img.gif)

- 메인뷰는 swiper 패키지를 사용하여 서버에서 받아온 이미지를 슬라이드 할수 있게 구현하였습니다.


![장바구니](https://blog.kakaocdn.net/dn/clLBrp/btrFBi0JUcV/1g5sQKC7pGQd5fR676p0yK/img.gif)
![장바구니2](https://blog.kakaocdn.net/dn/dEPUKs/btrFAQpSMPs/3ZOfMurvh6kpDrWwouHFr0/img.gif)

- 전체선택을 누르면 모든 상품이 선택될수 있게 하였습니다.

- 상품별로 수량 조절이 가능합니다.

- 수량 조절과 동시에 상품금액을 계산해서 뷰에 보여줍니다.

- 각각의 상품을 선택해서 상품금액을 계산하고 주문할 수 있습니다.

- 각각의 상품을 삭제할 수 있습니다.

- 배송지를 선택하지 않으면 주문할 수 없게 하였습니다.


## 3.기술스택

- React
  - Styled-component
  - react-router-dom
  - swiper
  - react-daum-postcode
- redux
- axios
<br />

