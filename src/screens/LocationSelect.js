import {View, Text, TextInput} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
const LocationSelect = () => {
  return (
    <View>
      <PressBackWithTitle title="Your Location" />
      <View style={{marginHorizontal: 6}}>
        <TextInput
          placeholderTextColor="black"
          placeholder="Enter You Address"
          style={styles.searchInputBox}
        />
      </View>
    </View>
  );
};

export default LocationSelect;
