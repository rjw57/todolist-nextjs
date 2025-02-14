import { colours as tokenColours } from "@ucam/helix-tokens";

// -----------------------------------------------------------------------------
// --- Global ------------------------------------------------------------------
// -----------------------------------------------------------------------------
const green = {
  green11: "#0A2E1F",
  green10: "#0F442E",
  green9: "#13553A",
  green8: "#176C49",
  green7: "#1C8258",
  green6: "#229E6B",
  green5: "#4DB78C",
  green4: "#7FCBAC",
  green3: "#AFDFCB",
  green2: "#DFF2EA",
  green1: "#F6FBF9",
} as const;

const crest = {
  crest11: "#4D0F1C",
  crest10: "#761414",
  crest9: "#93191A",
  crest8: "#B91F20",
  crest7: "#DD3025",
  crest6: "#ED593C",
  crest5: "#FD8153",
  crest4: "#FFA672",
  crest3: "#FFC392",
  crest2: "#FFE2C8",
  crest1: "#FFF6EE",
} as const;

const cherry = {
  cherry11: "#4D0B28",
  cherry10: "#74103B",
  cherry9: "#911449",
  cherry8: "#B61859",
  cherry7: "#CD3572",
  cherry6: "#D76492",
  cherry5: "#E18AAC",
  cherry4: "#E9ABC2",
  cherry3: "#F2CAD8",
  cherry2: "#FAE9EF",
  cherry1: "#FDF9FA",
} as const;

const indigo = {
  indigo11: "#1B2352",
  indigo10: "#29347A",
  indigo9: "#34429A",
  indigo8: "#4254C3",
  indigo7: "#5366E0",
  indigo6: "#7483E6",
  indigo5: "#939FEB",
  indigo4: "#B0B9F1",
  indigo3: "#CDD3F6",
  indigo2: "#EBEDFB",
  indigo1: "#F9FAFE",
} as const;

const core = {
  black: "#000102",
  white: "#FEFFFE",
} as const;

const colours = {
  ...green,
  ...crest,
  ...cherry,
  ...indigo,
  ...core,
  ...tokenColours,
};

export default colours;
