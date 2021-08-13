import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale } from '../../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  label: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  letsGo: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black
  },
  checkedImage: {
    width: scale(50),
    height: scale(50),
    resizeMode: 'contain'
  },
  letsGoContainer: {
    height: verticalScale(60),
    width: scale(130),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.peachPuff,
    borderRadius: 14,
    borderColor: Colors.shadow,
    borderWidth: 1
  }
});
