type Size = {
  width: string;
  height: string;
};

type SizeOption = "small" | "middle" | "large";


export const getSizeFromOption = (option: SizeOption): Size => {
  switch (option) {
    case "small":
      return { width: "200px", height: "200px" };
    case "middle":
      return { width: "400px", height: "400px" };
    case "large":
      return { width: "600px", height: "600px" };
    default:
      console.error("Invalid size option:", option);
      return { width: "200px", height: "200px" };
  }
};