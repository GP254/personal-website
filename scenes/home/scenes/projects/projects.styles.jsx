import styled from 'styled-components';

export const ProjectCard = styled('div')`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  border-radius: 20px;
  min-height: 250px;
  opacity: 0.9;
  color: #797979;
  box-shadow: rgba(121, 121, 121, 0.2) 0px 0px 16px;
  &:hover {
    opacity: 1;
    box-shadow: rgba(121, 121, 121, 0.2) 0px 0px 16px;
    transform: translateY(-0.5em);
  }
`;