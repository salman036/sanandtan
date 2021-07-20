import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function TanningCreamicon(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 .149h25v24.693H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.005 0 0 .005 0 -.006)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={200}
          height={200}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default TanningCreamicon;