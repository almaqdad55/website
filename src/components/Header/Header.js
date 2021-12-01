import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import Image from 'next/image';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Kok,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
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
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contacts">
          <NavLink>Contacts</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/almaqdad55" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/malikkamal-7828451b6/?msgControlName=reply_to_sender&msgConversationId=2-YWFjNTUxYmYtODc3Ny00NTJiLWIzMjUtOGI2M2MzZDA2ZTI1XzAxMA%3D%3D&msgOverlay=true"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
