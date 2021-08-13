import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { GET_REPOSITORIES, GET_USER_INFO } from '../queries';
import strings from '../constant/Strings';
import { Alert } from 'react-native';

const useRepositories = (user) => {
  const [
    getRepositoriesInfo,
    { data: repositoriesInfo, error: getRepositoriesInfoError }
  ] = useLazyQuery(GET_REPOSITORIES);
  const [getUserInfo, { data, error }] = useLazyQuery(GET_USER_INFO);
  const [repositoriesList, setRepositoriesList] = useState([]);
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userInfo) {
      getUserInfo();
    } else {
      getRepositoriesInfo({
        variables: {
          query: `user:${userInfo} sort:forks`,
          first: 3
        }
      });
    }
  }, [userInfo, getUserInfo, getRepositoriesInfo]);

  useEffect(() => {
    if (error) {
      Alert.alert(strings.unknownError, strings.fetchUserErrorMessage);
      setLoading(false);
    } else if (data?.viewer) {
      setUserInfo(data?.viewer?.login);
    }
  }, [data, error, setUserInfo]);

  useEffect(() => {
    if (getRepositoriesInfoError) {
      Alert.alert(strings.unknownError, strings.fetchRepositoriesErrorMessage);
      setLoading(false);
    } else if (repositoriesInfo?.search?.edges) {
      setRepositoriesList(repositoriesInfo?.search?.edges);
      setLoading(false);
    }
  }, [repositoriesInfo, getRepositoriesInfoError]);

  return {
    navigation,
    loading,
    repositoriesList
  };
};

export default useRepositories;
