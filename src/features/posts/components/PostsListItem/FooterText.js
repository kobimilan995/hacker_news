import React from 'react';
import {Text} from 'react-native';
import style from './style';
import moment from 'moment';

const FooterText = ({post}) => {
  const {score, by, time, descendants} = post;
  const pointsText = `${score} ${score === 1 ? 'point ' : 'points '}`;
  const commentsText = `${descendants} ${
    descendants === 1 ? 'comment ' : 'comments '
  }`;
  return (
    <Text>
      {pointsText}
      <Text style={style.muttedText}>by</Text>
      <Text>{` ${by} `}</Text>
      <Text style={style.muttedText}>{`${moment(time).fromNow()} | `}</Text>
      <Text>{commentsText}</Text>
    </Text>
  );
};

export default FooterText;
