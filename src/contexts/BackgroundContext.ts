import { createContext } from "react";

export const BackgroundContext = createContext({
  backgroundColor: "darkslategray",
  setBackgroundColor: (newColor) => {},
});
