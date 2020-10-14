import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Spacing from './Spacing';

const IconButton = ({icon, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Spacing size={1} vertical horizontal>
      <FontAwesomeIcon icon={icon} />
    </Spacing>
  </TouchableOpacity>
);

export default IconButton;
