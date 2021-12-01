import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const SkillItem = styled.div`
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 5rem;
  margin: 4rem 3rem;
  position: relative;
  border: 5px solid transparent;
  border-radius: 5px;
  &:hover {
    border: 5px solid ${(props) => props.color};
    cursor: pointer;

    > * {
      &:first-child {
        transform: scale(1.2);
        background: white;
      }
      &:last-child {
        transform: scale(1.2);
        /* background: #0f1624; */

        color: ${(props) => props.color};
      }
    }
  }
`;

export const SkillIcon = styled.div`
  transition: 0.7s ease-in-out;
  background-color: #0f1624;

  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );

  /* -webkit-background-clip: padding-box; */
  -webkit-text-fill-color: transparent;
  border-radius: 50%;
  position: relative;

  margin: 0 auto 2rem auto;
  margin-top: -5.9rem;
  height: 8rem;
  width: 8rem;
  /* &:hover {
    background-color: #0f1624;
    transform: scale(1.4);
    cursor: pointer;
  } */
`;

export const SkillTitle = styled.div`
  display: flex;

  transition: 0.4s ease-in-out;
  & p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
    /* color: ${(props) => props.color}; */
    background: linear-gradient(
      121.57deg,
      #ffffff 18.77%,
      rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
