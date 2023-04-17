import styled from 'styled-components';

export const ContainerAlert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  position: absolute;
  width: 300px;
  background: var(--black);
  border-radius: 0.4em;
  top: calc(40% - 150px);
  right: calc(50% - 150px);
  z-index: 25;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 1);

  .title {
    font-size: 1.3em;
    font-weight: 600;
    border-bottom: 1px solid var(--white);
    padding-bottom: 10px;
  }

  .text {
    margin: 10px 0;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
