import React from 'react';
import {Switch} from 'react-native';
import {bottomTabColor, whisperOne} from '../Utils/theme';

const HideButton = ({setPassword, password}) => {
  const toggleSwitch = () => setPassword(!password);

  return (
    <Switch
      trackColor={{false: whisperOne, true: bottomTabColor}}
      thumbColor={password ? '#B02520' : whisperOne}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={password}
    />
  );
};

export default HideButton;
