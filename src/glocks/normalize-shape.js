/*

  const unit = stripUnit(minScreen, true)[1] !== '' stripUnit(minScreen, true)[1] : 'px';
*/

export default const normalizeShape = (args, fallbacks) => {
  let { minFontSize, maxFontSize, minScreen, maxScreen } = fallbacks;
  let prop = "font-size";
  const isTuple = args.length > 1 ? true : false;

  //will use default screen range
  if (isTuple) {
    switch (args.length) {
      // will return calc, no prop, using default screen range
      case 2:
        minFontSize = args[0];
        maxFontSize = args[1];
        break;

      // will return prop, with calc, using default screen range
      case 3:
        prop = args[0];
        minFontSize = args[1];
        maxFontSize = args[2];
        break;

      // will return calc, using custom screen range
      case 4:
        minFontSize = args[0];
        maxFontSize = args[1];
        minScreen = args[2];
        maxScreen = args[3];
        break;

      // will return prop, with calc, using custom screen range
      case 5:
        prop = args[0];
        minFontSize = args[1];
        maxFontSize = args[2];
        minScreen = args[3];
        maxScreen = args[4];
        break;
    }
  }

  return [
    {
      between: [minScreen, maxScreen],
      props: [
        {
          [prop]: [minFontSize, maxFontSize]
        }
      ]
    }
  ];
};

export const sortShape = () => null;
export const checkTypeAgreement = () => null;
export const filterCSSProperties = () => null;
