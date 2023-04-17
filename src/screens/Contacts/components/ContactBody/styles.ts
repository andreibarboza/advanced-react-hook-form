import styled from 'styled-components';

export const ContainerBody = styled.div`
  padding: 0 25px 70px;

  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  width: 100%;
  max-height: calc(100vh - 160px);
  overflow: auto;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const EmptyMessage = styled.div`
  margin-top: 25px;
  width: 100%;
  text-align: center;
`;
