import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RightArrowIcon(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M1.001 10.5l4.903-5.422L.821.502" stroke="#777676" />
    </Svg>
  );
}

export default RightArrowIcon;
