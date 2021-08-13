import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, ApplicationStyles } from '../theme';
import PropTypes from 'prop-types';

// Useful component when you need to set background image or gradient effect to all screens
const ScreenContainer = ({ renderContent }) => {
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(Colors.transparent);
  }
  return (
    <View style={ApplicationStyles.mainContainer}>
      <LinearGradient
        useAngle
        angle={45}
        colors={[Colors.ivory, Colors.white]}
        locations={[0.25, 0.75]}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={ApplicationStyles.mainContainer}
      >
        {renderContent()}
      </LinearGradient>
    </View>
  );
};

ScreenContainer.propTypes = { renderContent: PropTypes.func };

export default ScreenContainer;
