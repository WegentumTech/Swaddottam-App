import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBox = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 12}}>
      <Text style={styles.searchBoxUI}>
      {'   '}
        <FontAwesome
          style={{marginTop: 8}}
          name="search"
          size={20}
          color="#FDB416"
        />
        {'    '} 
        Search Your Brekfast, Lunch, Dinner...
      </Text>
    </View>
  );
};

export default SearchBox;
