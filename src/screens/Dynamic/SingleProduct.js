import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SingleProduct = () => {
  return (
    <View>
      <View>
        <Image
          style={{width: '100%', height: 200}}
          source={{
            uri: 'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
          }}
        />

        <AntDesign
          style={{
            position: 'absolute',
            top: 20,
            left: 15,
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 20,
          }}
          name="arrowleft"
          size={15}
          color="black"
        />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          HANDI PANEER
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 5,
          }}>
          ₹ 190
        </Text>
        <Text style={{marginTop: 10, color: 'black'}}>
          this is some desciption of this item. this is some desciption of this
          item. this is some desciption of this item
        </Text>
      </View>
    </View>
  );
};

export default SingleProduct;
