import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const SearchBox = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 10, marginTop: 16,marginBottom:4}}>
      <Text
        onPress={() => navigation.navigate('SearchScreen')}
        style={styles.searchBoxUI}>
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
