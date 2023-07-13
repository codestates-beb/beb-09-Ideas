import React from 'react';
import styled from 'styled-components';
// import Logo from '../../frequently-used/Logo';
import { CgStark } from 'react-icons/cg'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("bg.png");
  background-size: cover;
  padding: 2%;
  text-align: center;
  background-color: #353535;
`;

const LogoAndLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 5px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  color: #fff;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const LinkLogo = styled.img`
  height: 23px;
  width: 23px;
  object-fit: contain;
  padding: 5px;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 14px;
  border-top: 1px solid #fff;
  padding-top: 30px;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoIcon = styled.img`
  height: 16px;
  margin-left: auto;
`;

const CountryText = styled.span`
  margin-left: 10px;
`;

const Footer = () => (
  <FooterContainer>
    <LogoAndLinksContainer>
      {/* <Logo/> */}
      <FooterLinks>
        {/* <FooterLink href="https://www.instagram.com/"><LinkLogo src="sns1.png" alt="" /></FooterLink>
        <FooterLink href="https://www.youtube.com/"><LinkLogo src="sns2.png" alt="" /></FooterLink>
        <FooterLink href="https://twitter.com/"><LinkLogo src="sns3.png" alt="" /></FooterLink> */}
      </FooterLinks>
    </LogoAndLinksContainer>
    <LogoDescription>
      <p>Ideas는 조직의 의사결정을 판가름하는것이 아닌 개개인들의 지식 능력을 수치화 하고</p>
      <p>객관하여 이끌어 가는 Proof of Ablility(능력 증명 방식)을 생각하여 게시판을 통해</p>
      <p>서로의 지적 능력을 평가하여 이를 통계적으로 수치화 하여 운영되도록 설계되었습니다.</p>
    </LogoDescription>
    <FooterText>
      © 2023 Ideas Company
      <CgStark size={"35px"}/>
      <CountryText>조영훈 이승민 이지수 김성환</CountryText>
    </FooterText>
  </FooterContainer>
);

export default Footer;