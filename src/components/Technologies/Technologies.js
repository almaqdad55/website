import React from 'react';
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiWindows,
  DiVisualstudio,
  DiGoogleDrive,
  DiAws,
  DiBitbucket,
} from 'react-icons/di';
import { FaBeer, FaWpforms } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListIcon,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider divider />
    <SectionText>
      Advanced computer skills & competnet in an array of technologies in the
      web development world.
    </SectionText>
    <ListTitle>Computer Skills</ListTitle>

    <List>
      <ListItem>
        <ListContainer>
          <ListIcon>
            {' '}
            <DiWindows size="3rem" />
          </ListIcon>
          <ListParagraph>Microsoft Office</ListParagraph>
        </ListContainer>
        <ListContainer>
          <ListIcon>
            <DiVisualstudio size="3rem" />
          </ListIcon>
          <ListParagraph>Visual Studio</ListParagraph>
        </ListContainer>
        <ListContainer>
          <ListIcon>
            <DiFirebase size="3rem" />
          </ListIcon>
          <ListParagraph>Firebase V8 & V9</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListIcon>
            <DiBitbucket size="3rem" />
          </ListIcon>
          <ListParagraph>Bitbucket</ListParagraph>
        </ListContainer>
        <ListContainer>
          <ListIcon>
            <FaWpforms size="3rem" />
          </ListIcon>
          <ListParagraph>Google Sheets</ListParagraph>
        </ListContainer>
        <ListContainer>
          <ListIcon>
            <DiAws size="3rem" />
          </ListIcon>
          <ListParagraph>Vercel</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
