import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const SearchBox = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 20}}>
      <Text style={styles.searchBoxUI}>
        {'      '}
        Search Your Brekfast, Lunch, Dinner...
      </Text>
    </View>
  );
};

export default SearchBox;
