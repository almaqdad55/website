import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faSass,
  faHtml5,
  faNodeJs,
  faBootstrap,
  faCss3,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import {
  SkillsContainer,
  SkillIcon,
  SkillTitle,
  SkillItem,
} from './SkillsStyles';
import { IconBase } from 'react-icons/lib';

const skills = [
  {
    title: 'HTML5',
    icon: faHtml5,
    color: '#f56941',
  },
  {
    title: 'CSS3',
    icon: faCss3,
    color: '#2962ff',
  },
  {
    title: 'JavaScript ',
    icon: faJsSquare,
    color: '#f9d543',
  },
  {
    title: 'React Js',
    icon: faReact,
    color: '#62d4f3',
  },
  {
    title: 'Scss',
    icon: faSass,
    color: '#cc6699',
  },
  {
    title: 'Git',
    icon: faGithub,
    color: '#283f4b',
  },
  {
    title: 'BootStrap',
    icon: faBootstrap,
    color: '#7952b3',
  },
  {
    title: 'Next Js',
    icon: faNodeJs,
    color: '#66d0ca',
  },
  {
    title: 'Tailwind Css',
    icon: faPalette,
    color: '#00769d',
  },
];

const Skills = () => (
  <Section id="skills">
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionDivider divider />
    <SkillsContainer>
      {skills.map((skill) => (
        <SkillItem color={skill.color}>
          <SkillIcon className="something">
            <FontAwesomeIcon
              className="icon"
              icon={skill.icon ? skill.icon : skill.src}
              style={{ color: skill.color }}
            />
          </SkillIcon>
          <SkillTitle style={{ color: skill.color }}>
            <p color={skill.color}>{skill.title}</p>
          </SkillTitle>
        </SkillItem>
      ))}
    </SkillsContainer>
  </Section>
);

export default Skills;
