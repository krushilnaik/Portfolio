import { useContext } from "react";
import { BackgroundContext } from "@/contexts/BackgroundContext";

export function useBackground() {
  const { backgroundColor, setBackgroundColor } = useContext(BackgroundContext);

  return { backgroundColor, setBackgroundColor };
}
