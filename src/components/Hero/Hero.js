import React from 'react';
import Link from 'next/link';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span, ButtonContainer } from './HeroStyles';
import { DiWindows } from 'react-icons/di';

const Hero = () => {
  return (
    <Section row nopadding id="about">
      <LeftSection>
        <SectionTitle hero center>
          <Span main>Malik Kamal</Span> <br />
          Front End Web Developer
        </SectionTitle>
        <SectionText>
          Freelance Web Developer, primarily using JavaScript and CSS
          frameworks. Proficient in an array of scripting languages and
          technologies. Enjoy building projects that solves real world problems.
        </SectionText>

        <ButtonContainer>
          <Button>
            <a
              href="https://drive.google.com/file/d/1COt1o72LkjRvZnvgAvk-kObEfCkyXOtP/view?usp=sharing"
              target="_blank"
              class="btn btn--full"
            >
              Resume
            </a>
          </Button>
        </ButtonContainer>
      </LeftSection>
    </Section>
  );
};

export default Hero;
