import { getSizeFromOption } from './selectSize';

type Size = {
  width: string;
  height: string;
};

type SizeOption = 'small' | 'middle' | 'large';

type SetSizesProps = {
  size?: Size | SizeOption;
};

const DEFAULT_SIZE: Size = { width: '200px', height: '200px' };

// UIサイズを計算する関数
const calculateUiSize = (size?: Size | SizeOption): Size => {
  // sizeがオブジェクトの場合はそのまま返す
  if (typeof size === 'object') {
    return size;
  } 
  // sizeが文字列の場合は、対応するオプションを取得して返す
  else if (typeof size === 'string') {
    return getSizeFromOption(size);
  } 
  // sizeが未指定の場合はデフォルトサイズを返す
  else {
    console.error('Size not specified. Using default size.');
    return DEFAULT_SIZE;
  }
};

// SizeHandlerコンポーネント
const SizeHandler = ({ size }: SetSizesProps) => {
  // UIサイズを計算する
  const uiSize = calculateUiSize(size);
  
  return uiSize;
};

export default SizeHandler;
