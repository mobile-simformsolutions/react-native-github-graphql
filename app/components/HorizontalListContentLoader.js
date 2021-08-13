import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, View } from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';

const HorizontalListContentLoader = ({
  containerWidth,
  pHeight,
  pWidth,
  itemCount = 20,
  containerStyles
}) => {
  return (
    <View style={[containerStyles]}>
      <FlatList
        data={[...new Array(itemCount)]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ContentLoader
            active
            title={false}
            pRows={1}
            pHeight={pHeight}
            pWidth={pWidth}
            containerStyles={{ width: containerWidth }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

HorizontalListContentLoader.propTypes = {
  containerWidth: PropTypes.number,
  pHeight: PropTypes.number,
  pWidth: PropTypes.number,
  itemCount: PropTypes.number,
  containerStyles: PropTypes.object
};

export default HorizontalListContentLoader;
