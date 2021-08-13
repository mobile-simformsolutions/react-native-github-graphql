import { StyleSheet, Platform, StatusBar } from 'react-native';
import { verticalScale, Metrics, moderateScale, Colors } from '../../theme';
import DeviceInfo from 'react-native-device-info';

let topSpaceIOS = verticalScale(10);
if (DeviceInfo.hasNotch()) {
  topSpaceIOS = verticalScale(24);
}

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: verticalScale(85),
    width: '100%',
    paddingHorizontal: Metrics.screenWidth * 0.025,
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : topSpaceIOS,
    alignItems: 'center'
  },
  rightBg: {
    width: Metrics.screenWidth * 0.18,
    alignItems: 'flex-end'
  },
  leftBg: {
    width: Metrics.screenWidth * 0.18,
    alignItems: 'flex-start'
  },
  middleBg: {
    width: Metrics.screenWidth * 0.6
  },
  title: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: moderateScale(18),
    fontWeight: 'bold'
  },
  headerText: {
    color: Colors.black,
    fontSize: 15
  },
  leftIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  }
});
