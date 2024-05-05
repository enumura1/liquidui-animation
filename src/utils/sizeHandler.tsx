import { useState, useEffect } from 'react';
import { getSizeFromOption } from './selectSize';

type Size = {
  width: string;
  height: string;
};

type SizeOption = 'small' | 'middle' | 'large';

type SetSizesProps = {
  size?: Size | SizeOption;
};


const SizeHandler = ({ size }: SetSizesProps) => {
  const [uiSize, setUiSize] = useState<Size>({ width: '200px', height: '200px' });

  useEffect(() => {
    if (typeof size === 'object') {
      // オブジェクトの場合
      setUiSize(size);
    } else if (typeof size === 'string') {
      // 文字列の場合
      setUiSize(getSizeFromOption(size));
    } else {
      // 未指定の場合
      console.error('Size not specified. Using default size.');
    }
  }, [size]);

  return uiSize;
};

export default SizeHandler;
