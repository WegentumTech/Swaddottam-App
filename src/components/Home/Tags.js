import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const Tags = () => {
  return (
    <ScrollView
      style={{marginHorizontal: 10, marginTop: 10}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <Text style={styles.tags}>Fast Delivery</Text>
      <Text style={styles.tags}>Rating 4.0+</Text>
      <Text style={styles.tags}>New Arrival</Text>
      <Text style={styles.tags}>Pure Veg</Text>
      <Text style={styles.tags}>Non Veg</Text>
      <Text style={styles.tags}>Fast Delivery</Text>
      <Text style={styles.tags}>Rating 4.0+</Text>
      <Text style={styles.tags}>New Arrival</Text>
      <Text style={styles.tags}>Pure Veg</Text>
      <Text style={styles.tags}>Non Veg</Text>
    </ScrollView>
  );
};

export default Tags;
