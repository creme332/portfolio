import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "U8-Regular, sans-serif",
  headings: {
    fontFamily: "U8-Black, sans-serif",
    sizes: {
      h1: { fontWeight: "600", fontSize: rem(56) },
    },
  },

  primaryColor: "navy-blue",
  colors: {
    "navy-blue": [
      "#edf4fd",
      "#d8e5f5",
      "#acc8ed",
      "#7eaae6",
      "#5990e1",
      "#4380de",
      "#3778dd",
      "#2b66c5",
      "#225ab0",
      "#124e9c",
    ],
    blue: [
      "#e6f8ff",
      "#d0ecff",
      "#a0d8fc",
      "#6dc1fa",
      "#47aff9",
      "#32a4f9",
      "#269efa",
      "#188adf",
      "#017ac8",
      "#0069b1",
    ],
    yellow: [
      "#fff9e0",
      "#fff1ca",
      "#ffe299",
      "#ffd262",
      "#ffc436",
      "#ffbb18",
      "#ffb702",
      "#e4a000",
      "#ca8e00",
      "#af7a00",
    ],
    beige: [
      "#fff9e5",
      "#fff0d0",
      "#fee19f",
      "#fed069",
      "#fec13e",
      "#feb825",
      "#feb418",
      "#e29d0b",
      "#c98c00",
      "#ae7800",
    ],
  },
});
