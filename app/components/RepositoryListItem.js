import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, Linking } from 'react-native';
import strings from '../constant/Strings';
import styles from './styles/RepositoryListItemStyle';

const onPressRepoLink = (url) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    }
  });
};

const RepositoryListItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.repositoryName}>{item?.node?.name}</Text>
      <Text style={styles.repositoryDescription} numberOfLines={3}>
        {item?.node?.description}
      </Text>
      <View style={styles.forkStatus}>
        <Text style={styles.repositoryDescription}>{`${strings.forks}: ${
          item?.node.forkCount ? item?.node.forkCount : 0
        }`}</Text>
        <Text
          style={[styles.repositoryDescription, styles.linkRepo]}
          onPress={() => onPressRepoLink(item?.node?.url)}
        >
          {strings.link}
        </Text>
      </View>
    </View>
  );
};

RepositoryListItem.propTypes = {
  item: PropTypes.object
};

export default RepositoryListItem;
