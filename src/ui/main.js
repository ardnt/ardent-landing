import styled from "styled-components"

import * as v from "./variables"

const Main = styled.div`
  background: ${v.background};
  background: linear-gradient(
    to bottom,
    ${v.backgroundStart} 0%,
    ${v.backgroundStop} 100%
  );
  color: ${v.black};
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  min-height: 100vh;
  padding: 0 30px;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`

export { Main }
