import {StyleSheet} from 'react-native';
import {borderColor, mutted} from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor,
    flexDirection: 'row',
  },
  indexContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 7,
  },
  muttedText: {
    color: mutted,
  },
  titleAndLinkContainer: {},
  otherInfoContainer: {},
});

export default styles;
