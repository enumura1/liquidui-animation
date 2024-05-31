import { getSizeFromOption } from "./selectSize";

type Size = {
  width: string;
  height: string;
};

type SizeOption = "small" | "middle" | "large";

type SetSizesProps = {
  size?: Size | SizeOption;
};

const DEFAULT_SIZE: Size = { width: "200px", height: "200px" };

const calculateUiSize = (size?: Size | SizeOption): Size => {
  
  if (typeof size === "object") {
    return size;
  } 
  else if (typeof size === "string") {
    return getSizeFromOption(size);
  } 
  else {
    console.error("Size not specified. Using default size.");
    return DEFAULT_SIZE;
  }
};


const SizeHandler = ({ size }: SetSizesProps) => {
  const uiSize = calculateUiSize(size);
  
  return uiSize;
};

export default SizeHandler;
