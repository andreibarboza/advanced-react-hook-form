import styled, { css, keyframes } from 'styled-components';

const spinner = keyframes`
  100% {
    transform: rotate(1turn)
  };
`;

export const ScreenContactsContainer = styled.div``;

export const Header = styled.div`
  width: 100%;
  height: 60px;

  font-size: 2em;

  display: flex;
  align-items: center;

  background-color: var(--black-second);

  padding: 25px;
`;

export const Body = styled.div``;

export const Overlay = styled.div<{ open: boolean; loading: boolean }>`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #fff 94%, #0000) top/8px 8px
        no-repeat,
      conic-gradient(#0000 30%, #fff);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: ${spinner} 1s infinite linear;
  }

  ${({ open, loading }) =>
    open &&
    css`
      opacity: 0.5px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #00000050;
      z-index: ${loading ? 200 : 20};
    `}
`;

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;

  .input-img {
    position: relative;
    width: 350px;

    > input {
      width: 100%;
      padding-right: 2em;
    }

    > svg {
      width: 1em;
      height: 1em;
      position: absolute;
      right: 0.5em;
      top: calc(50% - 0.5em);
    }
  }

  @media (max-width: 500px) {
    .input-img {
      width: 300px;
    }
  }
`;
