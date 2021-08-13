import React from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import {
  CustomHeader,
  RepositoryListItem,
  ScreenContainer,
  HorizontalListContentLoader
} from '../../components';
import { Icons, Metrics } from '../../theme';
import styles from './styles/RepositoriesListScreenStyles';
import strings from '../../constant/Strings';
import { useRepositories } from '../../hooks';

const RepositoriesListScreen = ({ route }) => {
  const { user } = route?.params;
  const { loading, navigation, repositoriesList } = useRepositories(user);

  return (
    <ScreenContainer
      renderContent={() => (
        <>
          <CustomHeader
            leftIcon={Icons.backArrow}
            title={strings.topRepositories}
            onLeftPress={() => navigation.goBack()}
          />
          {loading ? (
            <HorizontalListContentLoader
              containerWidth={Metrics.screenWidth * 0.95}
              pHeight={Metrics.screenHeight * 0.05}
              pWidth={Metrics.screenWidth * 0.95}
              containerStyles={styles.loaderContainer}
            />
          ) : (
            <FlatList
              style={styles.list}
              data={repositoriesList}
              renderItem={({ item }) => <RepositoryListItem item={item} />}
              ListEmptyComponent={() => (
                <Text style={styles.noRepoText}>{strings.nothingToShow}</Text>
              )}
              ItemSeparatorComponent={() => <View style={styles.seperator} />}
            />
          )}
        </>
      )}
    />
  );
};

RepositoriesListScreen.propTypes = {
  route: PropTypes.object
};

export default RepositoriesListScreen;
