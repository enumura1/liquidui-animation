# react-component-liquidUI

<!-- # Short Description -->

LiquidUI Component is a component for creating fluid UI in React applications. Using this component, you can create circular or rectangular components with oscillating animations.

<!-- # Badges -->

[![Github issues](https://img.shields.io/github/issues/enumura1/react-component-liquidUI)](https://github.com/enumura1/react-component-liquidUI/issues)
[![Github forks](https://img.shields.io/github/forks/enumura1/react-component-liquidUI)](https://github.com/enumura1/react-component-liquidUI/network/members)
[![Github stars](https://img.shields.io/github/stars/enumura1/react-component-liquidUI)](https://github.com/enumura1/react-component-liquidUI/stargazers)
[![Github top language](https://img.shields.io/github/languages/top/enumura1/react-component-liquidUI)](https://github.com/enumura1/react-component-liquidUI/)
[![Github license](https://img.shields.io/github/license/enumura1/react-component-liquidUI)](https://github.com/enumura1/react-component-liquidUI/)
[![workflow](https://github.com/enumura1/react-component-liquidUI/actions/workflows/main.yml/badge.svg)](https://github.com/enumura1/react-component-liquidUI/actions/workflows/main.yml)
[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/｛enumura1｝/{react-component-liquidUI})

# Demo

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/enumura1/LiquidUIMotionDocs/main/renderSample.gif" style="width: 80%;" alt="sample-image-gif">
</div>

<br>

<details><summary>sample source</summary>

```tsx
import LiquidUI from "@enumura/liquidui";

import "./css/LiquidUIStyles.css";
import LiquidUI from "./LiquidUI";

const App = () => {
  return (
    <main>
      <LiquidUI
        figureShape={"circle"}
        size={"middle"}
        bgColor={"#FFE2FF"}
        animationIntensity={"middle"}
        liquidDuration={10}
        rotateDuration={0}
        blurIntensity={10}
      ></LiquidUI>

      <LiquidUI
        figureShape={"square"}
        size={"middle"}
        bgColor={"linear-gradient(90deg, #fbd5fb, #95e9f3"}
        animationIntensity={"strong"}
        liquidDuration={10}
        rotateDuration={0}
      ></LiquidUI>

      <LiquidUI
        figureShape={"circle"}
        size={"middle"}
        bgColor={"linear-gradient(90deg, #C3F1FF, #0072ff)"}
        animationIntensity={"strong"}
        liquidDuration={12}
        rotateDuration={1000}
      ></LiquidUI>

      <LiquidUI
        figureShape={"circle"}
        size={"middle"}
        bgImg={"assets/sampleImg.webp"}
        animationIntensity={"strong"}
        liquidDuration={12}
        blurIntensity={0}
      ></LiquidUI>
    </main>
  );
};

export default App;
```

</details>

<br>

# Advantages

- **Component Manipulation**：The LiquidUI Component allows for the creation of UIs with fluid-like animation effects that can be easily deployed in React applications, allowing developers to implement liquid animations in a short amount of time.

- **Customizability**：The LiquidUI Component allows customization of various parameters such as shape, size, and animation intensity. This allows you to tailor the UI to your requirements.

# Installation

```

npm i @enumura/liquidui

```

# Build

Build with the following command.

```

npm run build

```

# Example

### 1. Example with blur

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/enumura1/LiquidUIMotionDocs/main/blurUI.gif" style="width: 70%;" alt="sample-image-gif">
</div>

<br>

```tsx
import LiquidUI from "@enumura/liquidui";

const App = () => {
  return (
    <LiquidUI
      figureShape={"circle"}
      size={"middle"}
      bgColor={"#FFE2FF"}
      animationIntensity={"middle"}
      liquidDuration={10}
      rotateDuration={0}
      blurIntensity={10}
    ></LiquidUI>
  );
};
```

### 2. Example of rotation

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/enumura1/LiquidUIMotionDocs/main/rotationUI.gif" style="width: 70%;" alt="sample-image-gif">
</div>

<br>

```tsx
import LiquidUI from "@enumura/liquidui";

const App = () => {
  return (
    <LiquidUI
      figureShape={"circle"}
      size={"middle"}
      bgColor={"linear-gradient(90deg, #C3F1FF, #0072ff)"}
      animationIntensity={"strong"}
      liquidDuration={12}
      rotateDuration={10}
    ></LiquidUI>
  );
};
```

### 3. Example of displaying image

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/enumura1/LiquidUIMotionDocs/main/image.gif" style="width: 70%;" alt="sample-image-gif">
</div>

<br>

```tsx
import LiquidUI from "@enumura/liquidui";

const App = () => {
  return (
    <LiquidUI
      figureShape={"circle"}
      size={"middle"}
      bgImg={"assets/sampleImg.webp"}
      animationIntensity={"strong"}
      liquidDuration={12}
      blurIntensity={0}
    ></LiquidUI>
  );
};
```

# Properties

| Property               | Type           | Description                                                                                                                                          |
| ---------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **figureShape**        | string         | Specifies the shape of the UI. Supported values are 'circle' and 'square'.                                                                           |
| **size**               | string, object | Specifies the size of the UI. Specify 'small', 'middle', or 'large' as a string, or specify an object in the form { width: string, height: string }. |
| **bgColor**            | string         | Specifies the background color of the UI. Specify CSS color names, color codes, gradients, etc.                                                      |
| **bgImg**              | string         | Specifies the background image of the UI. should be a valid path to an image file located in the 'public/assets' directory.                          |
| **liquidDuration**     | number         | Specifies the background color of the UI; can be a CSS color code or a gradient.                                                                     |
| **liquidDuration**     | number         | Specifies the time in milliseconds that a set of animations assigned to the UI will run.                                                             |
| **animationIntensity** | string         | Specifies the animation intensity. Supported values are 'small', 'middle', and 'strong'.                                                             |
| **rotateDuration**     | number         | Specifies the time in milliseconds per rotation when the UI rotates.                                                                                 |
| **blurIntensity**      | number         | Specifies the intensity of the blur applied to the UI; a value greater than 0 will blur the UI.                                                      |

# Contributors

- [enumura1](https://github.com/enumura1)

<!-- CREATED_BY_LEADYOU_README_GENERATOR -->

# Tags

`react` `UI`

# License

MIT license. See the [LICENSE file](/LICENSE) for details.
