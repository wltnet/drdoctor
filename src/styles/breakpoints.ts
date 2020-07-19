import { ThemedCssFunction, css } from "styled-components";

export const breakpointSizes = {
  tablet: 768,
  desktop: 1024,
};

type Breakpoints = {
  [key in keyof typeof breakpointSizes]: ThemedCssFunction<{}>;
};

const breakpoints = (Object.keys(
  breakpointSizes
) as (keyof typeof breakpointSizes)[]).reduce<Partial<Breakpoints>>(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media screen and (min-width: ${breakpointSizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {}
) as Breakpoints;

export default breakpoints;
