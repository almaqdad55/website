import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contacts">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0481786595">0481786595</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:almaqdad55@gmail.com">
            almaqdad55@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/almaqdad55">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/malikkamal-7828451b6/?msgControlName=reply_to_sender&msgConversationId=2-YWFjNTUxYmYtODc3Ny00NTJiLWIzMjUtOGI2M2MzZDA2ZTI1XzAxMA%3D%3D&msgOverlay=true">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
        <Link href="#about">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            {/* <DiCssdeck size="3rem" /> <Span>Portfolio</Span> */}
            <Image src="/images/logo_new.png" width="60%" height="60%" />
          </a>
        </Link>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
