import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';

const ScrollCategories = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 20, marginBottom: 20}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={styles.slideProduct}
            source={require('../../assets/img/thali.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ScrollCategories;
