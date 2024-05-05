import selectCssPatern from "./fetchMoveLevel";

type FetchStylesProps = (
  figureShape: string,
  bgColor: string,
  liquidDuration?: string,
  animationIntensity?: 'small' | 'middle' | 'strong',
  blurIntensity?: number,
  rotateDuration?: string,
  bgImg?: string
) => string[];

const fetchStyles: FetchStylesProps = (
  figureShape,
  bgColor,
  liquidDuration = '10',
  animationIntensity = 'small',
  blurIntensity = 0,
  rotateDuration = '0',
  bgImg = '',
) => {

  // background: linear-gradient(90deg, #00c6ff, #0072ff);
  const backgroundStyle  = bgImg === ''  ? bgColor: `url(${bgImg})`;
  
  // CSSを選択
  const animationStyleBuilder = () => {
    const selectedCSS = selectCssPatern(figureShape, animationIntensity);
    if (rotateDuration !== '0') {
      return `${selectedCSS} ${liquidDuration}s linear infinite, rotate ${rotateDuration}s linear infinite`;
    } else {
      return `${selectedCSS} ${liquidDuration}s linear infinite`;
    }
  };

  const animationStyle = animationStyleBuilder();

  // filter: blur(20px);
  const applyedBluer= `blur(${blurIntensity}px)`;
  
  const generatedStyles = blurIntensity !== 0 
    // ぼかしの適応
    ? [backgroundStyle, animationStyle, applyedBluer]
    // ぼかしの未適応
    : [backgroundStyle, animationStyle];

  return generatedStyles;
};

export default fetchStyles;
  