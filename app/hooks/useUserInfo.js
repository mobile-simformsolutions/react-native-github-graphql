import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { GET_USER_INFO } from '../queries';
import strings from '../constant/Strings';
import { Alert } from 'react-native';

const useUserInfo = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const { data: userInfo, error: getUserError } = useQuery(GET_USER_INFO);

  useEffect(() => {
    if (getUserError) {
      Alert.alert(strings.unknownError, strings.fetchUserErrorMessage);
      setLoading(false);
    } else if (userInfo?.viewer) {
      setUser(userInfo?.viewer?.login);
      setLoading(false);
      // setTimeout(() => {
      //   navigation.navigate('Repositories', { user });
      // }, 1500);
    }
  }, [userInfo, getUserError, navigation, user]);

  return {
    navigation,
    loading,
    user
  };
};

export default useUserInfo;
