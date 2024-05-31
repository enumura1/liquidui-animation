import "./css/LiquidUIStyles.css";
export type LiquidUIProps = {
    figureShape: "circle" | "square";
    size?: {
        width: string;
        height: string;
    } | ("small" | "middle" | "large");
    bgColor?: string;
    animationIntensity: "small" | "middle" | "strong";
    liquidDuration: number;
    rotateDuration?: number;
    blurIntensity?: number;
    bgImg?: string;
    children?: React.ReactNode;
};
declare const LiquidUI: React.FC<LiquidUIProps>;
export default LiquidUI;
