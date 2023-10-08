export const size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

// const Ejemplo = styled.div`
//   width: 100%;
//   background-color: blue;

//   @media ${device.xs} {
//     background-color: red;
//   }

//   @media ${device.sm} {
//     background-color: yellow;
//   }

//   // ... add more media queries as needed
// `;
