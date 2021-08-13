import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles/CustomHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme';
import PropTypes from 'prop-types';

const RenderLeftComponent = ({ leftText, leftIcon, onLeftPress }) => (
  <Pressable style={styles.leftBg} onPress={onLeftPress}>
    {leftText && <Text style={styles.headerText}>{leftText}</Text>}
    {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
  </Pressable>
);

const RenderRightComponent = ({ rightText, rightIcon, onRightPress }) => (
  <Pressable style={styles.rightBg} onPress={onRightPress}>
    {rightText && <Text style={styles.headerText}>{rightText}</Text>}
    {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
  </Pressable>
);

const CustomHeader = ({
  title,
  leftText,
  rightText,
  leftIcon,
  rightIcon,
  onRightPress,
  onLeftPress
}) => {
  return (
    <LinearGradient
      useAngle
      angle={75}
      locations={[0.25, 0.75]}
      colors={[Colors.peach, Colors.lighPeach]}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.header}
    >
      <>
        <RenderLeftComponent
          leftText={leftText}
          leftIcon={leftIcon}
          onLeftPress={onLeftPress}
        />
        <View style={styles.middleBg}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <RenderRightComponent
          rightText={rightText}
          rightIcon={rightIcon}
          onRightPress={onRightPress}
        />
      </>
    </LinearGradient>
  );
};

CustomHeader.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  leftIcon: PropTypes.number,
  rightIcon: PropTypes.number,
  onRightPress: PropTypes.func,
  onLeftPress: PropTypes.func
};

RenderLeftComponent.propTypes = {
  leftText: PropTypes.string,
  leftIcon: PropTypes.number,
  onLeftPress: PropTypes.func
};

RenderRightComponent.propTypes = {
  rightText: PropTypes.string,
  rightIcon: PropTypes.number,
  onRightPress: PropTypes.func
};

export default CustomHeader;
