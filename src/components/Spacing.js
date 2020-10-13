import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const getStyles = ({horizontal, vertical, top, bottom, left, right}) =>
  StyleSheet.create({
    1: {
      paddingTop: vertical || top ? 8 : 0,
      paddingBottom: vertical || bottom ? 8 : 0,
      paddingLeft: horizontal || left ? 8 : 0,
      paddingRight: horizontal || right ? 8 : 0,
    },
    2: {
      paddingTop: vertical || top ? 16 : 0,
      paddingBottom: vertical || bottom ? 16 : 0,
      paddingLeft: horizontal || left ? 16 : 0,
      paddingRight: horizontal || right ? 16 : 0,
    },
    3: {
      paddingTop: vertical || top ? 24 : 0,
      paddingBottom: vertical || bottom ? 24 : 0,
      paddingLeft: horizontal || left ? 24 : 0,
      paddingRight: horizontal || right ? 24 : 0,
    },
    4: {
      paddingTop: vertical || top ? 32 : 0,
      paddingBottom: vertical || bottom ? 32 : 0,
      paddingLeft: horizontal || left ? 32 : 0,
      paddingRight: horizontal || right ? 32 : 0,
    },
    5: {
      paddingTop: vertical || top ? 40 : 0,
      paddingBottom: vertical || bottom ? 40 : 0,
      paddingLeft: horizontal || left ? 40 : 0,
      paddingRight: horizontal || right ? 40 : 0,
    },
    6: {
      paddingTop: vertical || top ? 48 : 0,
      paddingBottom: vertical || bottom ? 48 : 0,
      paddingLeft: horizontal || left ? 48 : 0,
      paddingRight: horizontal || right ? 48 : 0,
    },
  });

function Spacing(props) {
  const {
    children,
    size,
    style = {},
    horizontal = false,
    vertical = false,
    top = false,
    bottom = false,
    left = false,
    right = false,
  } = props;
  return (
    <View
      style={[
        getStyles({horizontal, vertical, top, bottom, left, right})[size],
        style,
      ]}>
      {children}
    </View>
  );
}

Spacing.propTypes = {
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Spacing.defaultProps = {
  style: {},
  horizontal: false,
  vertical: false,
  top: false,
  bottom: false,
  left: false,
  right: false,
};

export default Spacing;
