import styled, { css } from 'styled-components';

export const ContainerModal = styled.div<{ open: boolean }>`
  position: absolute;
  color: var(--secondary-text);
  background: var(--black-second);
  width: 350px;
  height: calc(100vh - 60px);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 20px;

  box-shadow: -1px 0px 3px 0px rgba(255, 255, 255, 0.25);

  bottom: 0;

  right: -50px;
  opacity: 0;
  visibility: hidden;
  transition: all 200ms;
  z-index: 100;

  @media (max-width: 500px) {
    width: 100%;
    border-radius: inherit;
  }

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      right: 0;
      visibility: visible;
    `}
`;

export const CreateModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3em;
    margin-bottom: 1.5em;

    .icon-close {
      width: 3em;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      transition: all 200ms;

      svg {
        fill: var(--white);
        width: 1.5em;
        height: 1.5em;
      }

      :hover {
        opacity: 0.8;
      }
    }
  }

  .body {
    height: calc(100% - 63px);

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .input-container {
        display: flex;
        flex-direction: column;
      }

      .form-area {
        display: flex;
        flex-direction: column;
        gap: 10px;

        height: 100%;
        max-height: calc(100% - 60px);
        overflow-y: auto;

        > div {
          width: 95%;
        }

        .multiple-title {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title-img {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3em;
          }

          svg {
            width: 1em;
            height: 1em;
            fill: var(--white);
          }
        }
      }

      .container-button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }

  .border-error {
    border: 1px solid var(--error);
  }

  .error {
    margin-top: 0.3em;
    font-size: 12px;
    color: var(--error);
  }
`;
