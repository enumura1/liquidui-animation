type Size = {
    width: string;
    height: string;
};
type SizeOption = 'small' | 'middle' | 'large';
export declare const getSizeFromOption: (option: SizeOption) => Size;
export {};
