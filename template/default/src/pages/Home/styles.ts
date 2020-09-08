import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    color: #2ac289;
  }

  code {
    background-color: #333;
    padding: 0.1rem 0.5rem 0.25rem 0.5rem;
    color: #f8ba57;
    border-radius: 4px;
  }
`;

export { Page };
