// React imports
import React from "react";

// Styles
import colours from "../styles/colours";

export const RadioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11.5" stroke={colours.grey10} />
  </svg>
);

export const RadioCheckedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11.5" stroke={colours.grey10} />
    <circle cx="12" cy="12" r="8" fill={colours.cambridgeBlue7} />
  </svg>
);
