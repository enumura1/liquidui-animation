import { render, screen } from '@testing-library/react';
import LiquidUI, { LiquidUIProps } from '../LiquidUI';

describe('test LiquidUI Component', () => {

  // test figureShape: test circle, square
  test.each<'circle' | 'square'>(['circle', 'square'])(
    'should render correctly with figureShape: %s', (figureShapeArgs) => {
      const figureShapeProps: LiquidUIProps = {
        figureShape: figureShapeArgs,
        size: { width: '400px', height: '400px' },
        bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
        liquidDuration: 10,
        animationIntensity: 'small',
        rotateDuration: 100,
      };
      render(
        <LiquidUI {...figureShapeProps} >
          Dummy text to access LiquidUI components
        </LiquidUI>
      );

      const liquidUIWrapper9 = screen.getByText(/Dummy text to access LiquidUI components/i);
      const figureShapeStyles = liquidUIWrapper9.style.animation;

      let expectedStyleAnimationPatternaa ='';

      if(figureShapeArgs === 'circle') {
        expectedStyleAnimationPatternaa = `circleSmallMovement 10s linear infinite, rotate 100s linear infinite`;
      }else if(figureShapeArgs === 'square') {
        expectedStyleAnimationPatternaa = `squareSmallMovement 10s linear infinite, rotate 100s linear infinite`;
      }else{
        throw new Error(`Invalid figure shape: ${figureShapeArgs}`);
      }
      expect(figureShapeStyles).toBe(expectedStyleAnimationPatternaa);
    }
  );


  // bgColor: test red
  test('should render correctly with bgColor', () => {
    const bgColorProps: LiquidUIProps = {
      figureShape: 'circle',
      size: { width: '400px', height: '400px' },
      bgColor: 'red',
      liquidDuration: 10,
      animationIntensity: 'small',
      rotateDuration: 100,
    };
    render(
      <LiquidUI {...bgColorProps} >
        Dummy text to access LiquidUI components
      </LiquidUI>
    );

    const liquidUIWrapper8 = screen.getByText(/Dummy text to access LiquidUI components/i);
    const backgroundStyle = liquidUIWrapper8.style.background;
  
    expect(backgroundStyle).toBe('red');
  });


  // size: test 
  describe('with size property', () => {

    // size: test small, middle, or strong
    test.each<'small' | 'middle' | 'large'>(['small', 'middle', 'large'])(
      'should render correctly with size: %s', (sizeArgs) => {
        const stringSizeProps: LiquidUIProps = {
          figureShape: 'circle',
          bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
          liquidDuration: 10,
          animationIntensity: 'small',
          rotateDuration: 100,
          size: sizeArgs,
        };
        render(
          <LiquidUI {...stringSizeProps} >
            Dummy text to access LiquidUI components
          </LiquidUI>
        );

        const liquidUIWrapper7 = screen.getByText(/Dummy text to access LiquidUI components/i);
        const uiWidth = liquidUIWrapper7.style.width;
        const uiHeight = liquidUIWrapper7.style.height;
        let expectedWidth;
        let expectedHeight;
        
        switch (sizeArgs) {
          case 'small':
            expectedWidth = '200px';
            expectedHeight = '200px';
            break;
          case 'middle':
            expectedWidth = '400px';
            expectedHeight = '400px';
            break;
          case 'large':
            expectedWidth = '600px';
            expectedHeight = '600px';
            break;
          default:
            throw new Error('Invalid size');
        }

        expect(uiWidth).toBe(expectedWidth);
        expect(uiHeight).toBe(expectedHeight);
      }
    );


    // size test object
    test('should render correctly with size as an object', () => {
      const objectSizeProps: LiquidUIProps = {
        figureShape: 'circle',
        bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
        liquidDuration: 10,
        animationIntensity: 'small',
        rotateDuration: 100,
        size: { width: '400px', height: '400px' },
      };
      render(
        <LiquidUI {...objectSizeProps} >
          Dummy text to access LiquidUI components
        </LiquidUI>
      );

      const liquidUIWrapper6 = screen.getByText(/Dummy text to access LiquidUI components/i);
      const uiWidth = liquidUIWrapper6.style.width;
      const uiHeight = liquidUIWrapper6.style.height;

      expect(uiWidth).toBe('400px');
      expect(uiHeight).toBe('400px');
    });
  });


  // liquidDuration: test [-10, 0, 5]
  test.each([-10, 0, 5])('should render correctly with liquidDuration: %i', (liquidDurationArgs) => {
    const liquidDurationProps: LiquidUIProps = {
      figureShape: 'circle',
      size: { width: '300px', height: '300px' },
      bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
      liquidDuration: liquidDurationArgs,
      animationIntensity: 'small',
      rotateDuration: 100,
    };
    render(
      <LiquidUI {...liquidDurationProps} >
        Dummy text to access LiquidUI components
      </LiquidUI>
    );

    const liquidUIWrapper5 = screen.getByText(/Dummy text to access LiquidUI components/i);
    const styleLiquid = liquidUIWrapper5.style.animation;

    let expectedLiquidStylepp = '';
    if (liquidDurationArgs >= 0) {
      expectedLiquidStylepp = `circleSmallMovement ${liquidDurationArgs}s linear infinite, rotate 100s linear infinite`;
    }else {
      expectedLiquidStylepp = 'circleSmallMovement 0s linear infinite, rotate 100s linear infinite';
    }

    expect(styleLiquid).toBe(expectedLiquidStylepp);
  });


  // test: animationIntensity 'small' | 'middle' | 'strong'
  test.each<'small' | 'middle' | 'strong'>(['small', 'middle', 'strong'])(
    'should render correctly with animationIntensity: %s', (animationIntensityArgs) => {
      const animationIntensityProps: LiquidUIProps = {
        figureShape: 'circle',
        size: { width: '300px', height: '300px' },
        bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
        liquidDuration: 10,
        animationIntensity: animationIntensityArgs,
        rotateDuration: 100,
      };
      render(
        <LiquidUI {...animationIntensityProps} >
          Dummy text to access LiquidUI components
        </LiquidUI>
      );

      const liquidUIWrapper4 = screen.getByText(/Dummy text to access LiquidUI components/i);
      const styleAnimation = liquidUIWrapper4.style.animation;

      let expectedStyleAnimationPattern = '';

      switch (animationIntensityArgs) {
        case 'small':
              expectedStyleAnimationPattern = `circleSmallMovement 10s linear infinite, rotate 100s linear infinite`;
              break;
        case 'middle':
              expectedStyleAnimationPattern = `circleMiddleMovement 10s linear infinite, rotate 100s linear infinite`;
              break;
        case 'strong':
              expectedStyleAnimationPattern = `circleLargeMovement 10s linear infinite, rotate 100s linear infinite`;
              break;
        default:
          throw new Error(`Invalid animationIntensity: ${animationIntensityArgs}`);
          break;
      }
      expect(styleAnimation).toBe(expectedStyleAnimationPattern);
    }
  );


  // test: rotateDuration [-10, 0, 10]
  test.each([-10, 0, 10])('should render correctly with rotateDuration: %i', (rotateDurationArgs) => {
    const rotateDurationProps: LiquidUIProps = {
      figureShape: 'circle',
      size: { width: '300px', height: '300px' },
      bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
      animationIntensity: 'small',
      liquidDuration: 10,
      blurIntensity: 10,
      rotateDuration: rotateDurationArgs,
    };
    render(
      <LiquidUI {...rotateDurationProps} >
        Dummy text to access LiquidUI components
      </LiquidUI>
    );
    
    const liquidUIWrapper3 = screen.getByText(/Dummy text to access LiquidUI components/i);
    const styleFilter = liquidUIWrapper3.style.animation;

    let expectedStyleAnimation = '';
    if (rotateDurationArgs > 0) {
      expectedStyleAnimation = `circleSmallMovement 10s linear infinite, rotate ${rotateDurationArgs}s linear infinite`;
    }else {
      expectedStyleAnimation = 'circleSmallMovement 10s linear infinite';
    }

    expect(styleFilter).toBe(expectedStyleAnimation);
  });

  
  // test: blurIntensity [-10, 0, 10]
  test.each([-10, 0, 10])('should render correctly with blurIntensity: %i', (blurIntensityArgs) => {
    const blurIntensityProps: LiquidUIProps = {
      figureShape: 'circle',
      size: { width: '300px', height: '300px' },
      bgColor: 'linear-gradient(90deg, #00c6ff, #0072ff)',
      animationIntensity: 'small',
      liquidDuration: 10,
      blurIntensity: blurIntensityArgs,
      rotateDuration: 10,
    };
    render(
      <LiquidUI {...blurIntensityProps} >
        Dummy text to access LiquidUI components
      </LiquidUI>
    );
    const liquidUIWrapper2 = screen.getByText(/Dummy text to access LiquidUI components/i);
    const styleFilter = liquidUIWrapper2.style.filter;

    let expectedStyleFilter = '';
    if (blurIntensityArgs > 0) {
      expectedStyleFilter = `blur(${blurIntensityArgs}px)`;
    }

    expect(styleFilter).toBe(expectedStyleFilter);
  });

  test('renders with correct background style when bgImg prop is provided', () => {
    render(
      <LiquidUI
        figureShape='circle'
        size={'middle'}
        bgColor={'linear-gradient(90deg, #00c6ff, #0072ff)'}
        bgImg={'../assets/sampleImg.png'}
        liquidDuration={10}
        animationIntensity={'strong'}
        rotateDuration={100}
        blurIntensity={20}>
          Dummy text to access LiquidUI components
      </LiquidUI>
    );

    const liquidUIWrapper = screen.getByText(/Dummy text to access LiquidUI components/i);
    const backgroundImageUrl = liquidUIWrapper.style.background;

    expect(backgroundImageUrl).toBe('url(../assets/sampleImg.png)');
  });
});
