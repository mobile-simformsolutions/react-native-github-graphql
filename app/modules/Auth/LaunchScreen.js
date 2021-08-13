import React from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '../../components';
import { Colors } from '../../theme';
import styles from './styles/LaunchStyles';
import strings from '../../constant/Strings';
import { useUserInfo } from '../../hooks';

const LaunchScreen = () => {
  const { loading, navigation, user } = useUserInfo();

  return (
    <ScreenContainer
      renderContent={() => (
        <View style={styles.container}>
          {loading ? (
            <>
              <ActivityIndicator color={Colors.black} size={'large'} />
              <Text style={styles.label}>{strings.authenticating}</Text>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.letsGoContainer}
                onPress={() => navigation.navigate('Repositories', { user })}
              >
                <Text style={styles.letsGo}>{strings.letsGo}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    />
  );
};

export default LaunchScreen;
