import fetchStyles from "./utils/fetchStyles";
import SizeHandler from "./utils/sizeHandler";
import "./css/LiquidUIStyles.css";

export type LiquidUIProps = {
  figureShape: "circle" | "square";
  size?: { width: string, height: string,} | ("small" | "middle" | "large"),
  bgColor?: string,
  animationIntensity: "small" | "middle" | "strong",
  liquidDuration: number,
  rotateDuration?: number,
  blurIntensity?: number,
  bgImg?: string,
  children?: React.ReactNode,
}

const LiquidUI: React.FC<LiquidUIProps> = ({ 
  figureShape,
  size,
  bgColor = "",
  liquidDuration,
  blurIntensity = 0,
  animationIntensity,
  rotateDuration = 0,
  bgImg = "",
  children,
}) => {
  
  const { width, height } = SizeHandler({ size });

  const validLiquidDuration = Math.max(0, liquidDuration);
  const validRotateDuration = Math.max(0, rotateDuration);
  const validBlurIntensity = Math.max(0, blurIntensity);
  
  const stylesArray = fetchStyles(
    figureShape,
    bgColor,
    validLiquidDuration.toString(),
    animationIntensity,
    validBlurIntensity,
    validRotateDuration.toString(),
    bgImg,
  );
  
  const [backgroundStyle= "", animationStyle= "", applyedBlur= ""] = stylesArray;

  const generatedStyles = {
    width: `${width}`,
    height: `${height}`,
    background: backgroundStyle,
    animation: animationStyle,
    ...(applyedBlur && { filter: applyedBlur }),
    ...(bgImg && { backgroundSize: "cover"}),
    ...(bgImg && { backgroundPosition: "center center"}),
  };

  return (
    <div className="liquid-ui-wrapper" style={generatedStyles}>
      {children}
    </div>
  );
};

export default LiquidUI;
