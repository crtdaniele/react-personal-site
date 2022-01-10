import { imagesLight, imagesDark } from "../assets";
import { useTheme } from "./useTheme";

/**
 * Use this hook to get an image for your UI
 * @param image keyof imagesLight
 * @returns an image to use like this <img src="YOUR IMAGE"
 */
const useImage = (image: keyof typeof imagesLight) => {
  const { currentTheme } = useTheme();
  if (currentTheme === "dark") {
    return imagesDark[image];
  }
  return imagesLight[image];
};

export { useImage };
