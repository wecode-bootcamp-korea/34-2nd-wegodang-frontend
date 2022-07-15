# Wegodang Client Project

## 🌟 What is project Goal

- 외부 라이브러리의 사용 방식( 문서읽는 법, 적용 방법 등...)을 익히는것을 최대한의 목표로 선정!
- OAuth2.0 Kakao 인증.인가방식 적용!!
- React 심화 과정인 custom hook을 이용하여 React 다운 프로젝트를 작성!!!

## 🌟 Wegodang Project Family

- F.E<br />
  [서한샘](https://github.com/kor-sams-dev)
  [최재혁](https://github.com/chlwogur31)
  [안중영](https://github.com/Ahnjungyoung)
  <br />
- B.E<br />
  [김우식](https://github.com/Kws1995)

<br />

## 🌟개발 인원 및 기간

- 개발기간<br />2022/07/04 ~ 2022/07/15
- 개발 인원<br />프론트엔드 3명, 백엔드 1명

## 🌟 적용 기술 및 구현 기능

### 적용 기술

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Kakao REST API-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white">

<br />

### 사용 라이브러리

- `styled-components`
- `qs`
- `react-slick`
- `recoil`
- `redux`
- `axios`

<br />

### 사용 폰트

- Poppins
  - 사용법 : `font-family: 'Poppins', sans-serif;`
  - font-weight : `500`
- Noto Sans Korean
  - 사용법 : `font-family: 'Noto Sans KR', sans-serif;`
  - font-weight : `400`, `700`

<br />

## 🌟 구현 페이지

<br />

### 메인 화면

## <img width="80%" alt='메인페이지' src='public/readme/main.png'>

#### 적용기술

- react slick <br />
  react slick 라이브러리를 사용하여 carousel과 categories를 구현함
- 재사용 <br />
  categories, itemCard 등과 같이 중복되는 컴포넌트를 분리하여 재사용성을 높임
- 무한 스크롤 <br />
  스크롤을 맨 아래로 내리면 새로운 데이터를 받아와 표현하도록 작업

<br />

### 회원가입, 로그인

## <img width="40%" alt='회원가입' src='public/readme/signUp.png'> <img width="40%" alt='로그인' src='public/readme/signIn.png'>

#### 적용 기술

- OAuth2.0<br />
  카카오 REST API 방식을 이용하여 카카오 server와 통신 <br />
  B/E와 통신하여 AccessToken을 받아오도록 작업

<br />

### 상세페이지

<img width="80%" alt='상세' src='public/readme/detail.png'>

#### 적용 기술

- 반응형 웹 디자인을 구현함
- 동적 라우팅을 이용하여 상세 페이지를 동적으로 구현함
- custom hook을 사용하여 데이터 통신을 구현함
