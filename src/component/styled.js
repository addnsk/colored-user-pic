import styled from "styled-components";

export const StyledBorder = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 9999px;
  background: linear-gradient(to right, ${({ colors }) => colors.join()});
  padding: ${({ colorWidth }) => colorWidth}px;
  box-sizing: border-box;

  cursor: pointer;
  &:hover {
    background: linear-gradient(
      to right,
      ${({ hoverColors }) => hoverColors.join()}
    );
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${({ backgroundSolor }) => backgroundSolor};
  padding: ${({ margin }) => margin}px;
  box-sizing: inherit;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  vertical-align: bottom;
`;
