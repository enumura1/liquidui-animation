type Size = {
    width: string;
    height: string;
};
type SizeOption = "small" | "middle" | "large";
type SetSizesProps = {
    size?: Size | SizeOption;
};
declare const SizeHandler: ({ size }: SetSizesProps) => Size;
export default SizeHandler;
