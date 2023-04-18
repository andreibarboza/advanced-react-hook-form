import styled from 'styled-components';

export const ContainerTelephone = styled.div`
  display: flex;
  flex-direction: column;

  .telephone-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3em;

    svg {
      transition: all 200ms;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }

      width: 1.6em !important;
      height: 1.6em !important;

      fill: var(--error);
    }
  }
`;

export const ContainerInputMask = styled.div`
  display: flex;
  width: 100%;

  input {
    width: 100%;
  }
`;

export const WrapperSVG = styled.div`
  cursor: pointer;

  width: 30px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 200ms;

  > svg {
    width: 1em;
    height: 1em;
    gap: 0.8em;
    fill: var(--white);
  }

  :hover {
    opacity: 0.8;
  }
`;

export const NumberType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  margin-left: 0.5em;

  input {
    width: 12px;
    border-radius: unset;
    margin: unset;
  }
`;

export const Radio = styled.div`
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
  }
`;
