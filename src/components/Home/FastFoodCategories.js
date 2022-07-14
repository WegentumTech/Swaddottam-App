import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const FastFoodCategories = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 15, marginTop: 10,marginBottom:25}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{flex: 2, fontWeight: 'bold', fontSize: 17, color: 'black'}}>
          Eat What Makes You Happy
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            fontSize: 17,
            color: 'black',
          }}>
          View All
          <Entypo
            style={{marginTop: 8}}
            name="chevron-right"
            size={20}
            color="black"
          />
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EatWhatMakesYouHappy')}>
          <Image
            style={styles.fastFoodProducts}
            source={require('../../assets/img/pizza.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FastFoodCategories;
