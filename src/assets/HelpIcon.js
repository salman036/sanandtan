import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function HelpIcon(props) {
  return (
    <Svg
      width={25}
      height={23}
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 .5h25v22H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00444 0 0 .00505 0 -.068)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={225}
          height={225}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default HelpIcon;
