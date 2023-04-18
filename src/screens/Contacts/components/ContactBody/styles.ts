import styled from 'styled-components';

export const ContainerBody = styled.div`
  padding: 0 25px 140px;

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;

  @media (max-width: 600px) {
  }
`;

export const EmptyMessage = styled.div`
  margin-top: 25px;
  width: 100%;
  text-align: center;
`;

export const ContainerWithLetter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.7em;

  margin-bottom: 0.7em;

  :last-child {
    margin-bottom: 0;
  }

  .letter {
    font-size: 1.5em;
    margin-bottom: 0.3em;
    position: relative;

    ::after {
      content: '';
      margin-left: 10px;
      position: absolute;
      top: 50%;
      width: calc(100% - 28px);
      height: 1px;
      background: #ffffff50;
    }
  }

  .contacts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
  }
`;
