import { StyleSheet } from 'react-native';
import { verticalScale, scale, Colors } from '../../theme';

export default StyleSheet.create({
  row: {
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(15)
  },
  repositoryName: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold'
  },
  repositoryDescription: {
    color: Colors.black,
    fontSize: 16,
    marginTop: 3
  },
  forkStatus: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkRepo: {
    color: Colors.blue,
    fontWeight: '500'
  }
});
