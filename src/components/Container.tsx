import styled from "styled-components";

const Container = styled.div`
  max-width: 1240px;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.small} 15px;
  }
`;

export default Container;
