import { css } from "@emotion/react";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 570px) {
      ${props}
    }
  `;
};

export const mobileLandscape = (props) => {
  return css`
    @media only screen and (max-width: 767.98px) {
      ${props}
    }
  `;
};
export const tablets = (props) => {
  return css`
    @media only screen and (max-width: 991.98px) {
      ${props}
    }
  `;
};
