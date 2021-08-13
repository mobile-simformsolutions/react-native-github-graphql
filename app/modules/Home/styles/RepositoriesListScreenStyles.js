import { StyleSheet, Platform } from 'react-native';
import { scale, verticalScale, Colors, Metrics, Fonts } from '../../../theme';

export default StyleSheet.create({
  floatingButtonBg: {
    bottom: verticalScale(25),
    right: scale(10),
    position: 'absolute'
  },
  floatingButton: {
    height: scale(60),
    width: scale(60)
  },
  list: {
    flex: 1
  },
  seperator: {
    width: '100%',
    height: 1,
    marginLeft: scale(18),
    backgroundColor: Colors.peachPuff
  },
  inputBg: {
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center',
    borderBottomColor: Colors.brick,
    height: Platform.OS === 'ios' ? verticalScale(65) : verticalScale(75)
  },
  labelText: {
    color: Colors.black,
    fontSize: 14,
    marginTop: 20
  },
  inputText: {
    color: Colors.cadmiumyellow,
    fontSize: 15,
    marginTop: Platform.OS === 'ios' ? verticalScale(15) : verticalScale(0)
  },
  dropDownBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center',
    alignItems: 'center'
  },
  selectedValueText: {
    color: Colors.cadmiumyellow,
    fontSize: 15,
    paddingRight: 10,
    width: Metrics.screenWidth * 0.85
  },
  selectedLabelText: {
    color: Colors.black,
    fontSize: 15,
    paddingRight: 10,
    width: Metrics.screenWidth * 0.85
  },
  downArrow: {
    width: 20,
    height: 16,
    resizeMode: 'contain'
  },
  dropDownDivider: {
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.brick,
    marginTop: 10
  },
  commitmentBg: {
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center'
  },
  commitmentLabel: {
    color: Colors.black,
    fontSize: 14,
    marginTop: 30,
    marginBottom: 10
  },
  radioLabel: {
    fontSize: 16,
    color: Colors.cadmiumyellow,
    paddingLeft: 5,
    marginTop: -5
  },
  selectedRadioWrap: {
    marginLeft: 0
  },
  radioWrap: {
    marginLeft: 20
  },
  loaderContainer: {
    alignSelf: 'center',
    marginTop: verticalScale(10),
    marginLeft: -10
  },
  inputContainer: {
    marginTop: verticalScale(20)
  },
  alertText: {
    color: Colors.red,
    fontSize: Fonts.size.small
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center'
  },
  noRepoText: {
    marginTop: verticalScale(80),
    alignSelf: 'center',
    fontSize: 15
  }
});
