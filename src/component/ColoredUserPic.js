import * as React from "react";
import { StyledBorder, StyledBackground, StyledImg } from "./styled";

export const ColoredUserPic = ({
  src,
  size = 150,
  margin = 4,
  backgroundSolor = "red",
  colors = ["green", "blue"],
  hoverColors = ["blue", "green"],
  colorWidth = 6,
}) => {
  const avatar = require(`${src}`);

  const borderProps = { size, colors, hoverColors, colorWidth };
  const backgroundProps = { backgroundSolor, margin };

  return (
    <article>
      <StyledBorder {...borderProps}>
        <StyledBackground {...backgroundProps}>
          <StyledImg src={avatar.default} alt="avatar" />
        </StyledBackground>
      </StyledBorder>
    </article>
  );
};
