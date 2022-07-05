import React from 'react';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.WrapperMenu>
        <S.Menus>
          <S.Menu href="/">정책 ・ 약관</S.Menu>
          <S.Menu href="/">개인정보처리방침</S.Menu>
        </S.Menus>
        <S.Menus>
          <S.Menu href="/">제휴문의</S.Menu>
          <S.Menu href="/">공지사항</S.Menu>
          <S.Menu href="/">인재채용</S.Menu>
          <S.Menu href="/">SNS</S.Menu>
        </S.Menus>
      </S.WrapperMenu>
      <S.WrapperBottom>
        <div>
          <S.SupportButton>와디즈에 문의하기</S.SupportButton>
        </div>
        <div>
          <S.CallCenters>
            <S.CallCenter>
              <S.Text>펀딩/스토어 고객센터</S.Text>
              <S.Text fontSize={20} fontWeight="bold">
                1661-9056
              </S.Text>
            </S.CallCenter>
            <S.CallCenter>
              <S.Text>파이낸스 고객센터</S.Text>
              <S.Text fontSize={20} fontWeight="bold">
                1811-9090
              </S.Text>
            </S.CallCenter>
          </S.CallCenters>
          <S.Text>
            상담 가능 시간 : 평일 오전 9시 ~ 오후 6시 (주말 공휴일 제외)
          </S.Text>
          <S.WrapperEmails>
            <S.Text fontWeight="bold">이메일 (24시간 접수 가능)</S.Text>
            <S.Text>펀딩 : info@wadiz.kr</S.Text>
            <S.Text>스토어 : help.store@wadiz.kr</S.Text>
            <S.Text>파이낸스 : help.finance@wadiz.kr</S.Text>
          </S.WrapperEmails>
          <S.WrapperDetail>
            <S.Text fontSize={12}>
              일부 상품의 경우 와디즈는 통신판매중개자이며 통신판매 당사자가
              아닙니다.
            </S.Text>
            <S.Text fontSize={12}>
              해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은
            </S.Text>
            <S.Text fontSize={12}>
              판매자에게 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기
              바랍니다.
            </S.Text>
          </S.WrapperDetail>
        </div>

        <S.WrapperInfo>
          <S.Text>
            와고당 ㈜ | 대표이사 서한샘 | 사업자등록번호 123-45-67890
          </S.Text>
          <S.Text>통신판매업신고번호 2020-선릉분당C-1234</S.Text>
          <S.Text>서울시 너무배고프구 고기앞으로 202호</S.Text>
          <S.Text fontWeight="bold"> © wadiz Co., Ltd. </S.Text>
        </S.WrapperInfo>
        <div>
          <S.WrapperApplication>
            <S.Application>Android 앱</S.Application>
            <S.Application>iOS 앱</S.Application>
          </S.WrapperApplication>
        </div>
      </S.WrapperBottom>
    </S.Wrapper>
  );
};

export default Footer;
