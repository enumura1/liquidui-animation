import selectCssPatern from "./fetchMoveLevel";

type FetchStylesProps = (
  figureShape: string,
  bgColor: string,
  liquidDuration?: string,
  animationIntensity?: "small" | "middle" | "strong",
  blurIntensity?: number,
  rotateDuration?: string,
  bgImg?: string
) => string[];

const fetchStyles: FetchStylesProps = (
  figureShape,
  bgColor,
  liquidDuration = "10",
  animationIntensity = "small",
  blurIntensity = 0,
  rotateDuration = "0",
  bgImg = "",
) => {

  
  const backgroundStyle  = bgImg === ""  ? bgColor: `url(${bgImg})`;
  
  const animationStyleBuilder = () => {
    const selectedCSS = selectCssPatern(figureShape, animationIntensity);
    if (rotateDuration !== "0") {
      return `${selectedCSS} ${liquidDuration}s linear infinite, rotate ${rotateDuration}s linear infinite`;
    } else {
      return `${selectedCSS} ${liquidDuration}s linear infinite`;
    }
  };

  const animationStyle = animationStyleBuilder();
  
  const appliedBluer= `blur(${blurIntensity}px)`;
  const generatedStyles = blurIntensity !== 0 
    
    ? [backgroundStyle, animationStyle, appliedBluer]
    
    : [backgroundStyle, animationStyle];

  return generatedStyles;
};

export default fetchStyles;
  
