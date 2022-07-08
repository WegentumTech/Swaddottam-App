import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import PressBack from '../components/Reusable/PressBack';
import styles from '../Styles/GloablStyles';
import Tags from '../components/Home/Tags';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
const SearchScreen = () => {
  return (
    <ScrollView>
      <PressBackWithTitle title="Search Your Food" />
      <View style={{marginHorizontal: 6}}>
        <TextInput placeholderTextColor="black" placeholder='Search Your Brekfast, Lunch, Dinner...' style={styles.searchInputBox} />
        <Tags />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
